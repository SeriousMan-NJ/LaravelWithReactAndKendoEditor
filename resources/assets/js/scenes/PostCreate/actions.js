import { EDITOR_VALUE } from './constants'

export function getEditorValue(value) {
  return {
    type: EDITOR_VALUE,
    value
  }
}

export function submit() {
  return (dispatch, getState) => {
    return fetch(`http://homestead.test/api/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: '제목없음',
        content: getState().editorValue
      })
    })
  }
}
