import React, { Component } from 'react'
import App from '../../components/App'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

import { kendo } from '@progress/kendo-ui'
import { Editor } from '@progress/kendo-editor-react-wrapper'

import { getEditorValue, submit } from './actions'

import './PostCreate.css'

class PostCreate extends Component {
  handleOnChange(e) {
    const { dispatch } = this.props
    dispatch(getEditorValue(e.sender.body.innerHTML))
  }
  handleSubmit() {
    const { dispatch } = this.props
    dispatch(submit())
  }
  insertUrl(editor) {
    window.onmessage = function(e) {
      editor.exec('inserthtml', { value: e.data })
    }
    const w = window.open("http://localhost:4000/post")
  }

  render() {
    const self = this
    return (
      <App
        title={
          <div>
            <h1>게시글 작성</h1>
          </div>
        }
        content={
          <Form>
            <Editor id='editor' tools={[
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "justifyLeft",
                "justifyCenter",
                "justifyRight",
                "justifyFull",
                "insertUnorderedList",
                "insertOrderedList",
                "indent",
                "outdent",
                "createLink",
                "unlink",
                "insertImage",
                "insertFile",
                "subscript",
                "superscript",
                "tableWizard",
                "createTable",
                "addRowAbove",
                "addRowBelow",
                "addColumnLeft",
                "addColumnRight",
                "deleteRow",
                "deleteColumn",
                "viewHtml",
                "formatting",
                "cleanFormatting",
                "fontName",
                "fontSize",
                "foreColor",
                "backColor",
                "print",
                {
                  name: 'insertUrl',
                  tooltip: 'Insert URL',
                  exec: function(e) {
                    const editor = $(this).data('kendoEditor')
                    self.insertUrl(editor)
                  },
                }
            ]} change={(e) => this.handleOnChange(e)} height={500} />
            <Button primary type='submit' onClick={() => this.handleSubmit()}>저장</Button>
          </Form>
        }
      />
    )
  }
}

export default connect()(PostCreate)
