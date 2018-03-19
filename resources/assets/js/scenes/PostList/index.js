import React, { Component } from 'react'
import App from '../../components/App'
import { connect } from 'react-redux'
import { fetchPostList } from './actions'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'

function mapStateToProps(state) {
  const { postList } = state

  return {
    postList
  }
}

class PostList extends Component {
  componentDidMount() {
    const { dispatch, postList } = this.props
    dispatch(fetchPostList())
  }
  render() {
    const { postList } = this.props

    return (
      <App
        title={
          <div>
            <h1>게시글 목록!
              <Link to='/post/create'>
                <Button primary size='small'>추가</Button>
              </Link>
            </h1>
          </div>
        }
        content={postList.length > 0 &&
          <div>
            <h2>요약 보기</h2>
            <Grid
              style={{ maxHeight: '400px' }}
              data={postList}
            >
              <Column field="title" title="ID" width="100px" />
              <Column field="content" title="Name" width="250px" />
            </Grid>
            <h2>자세히 보기</h2>
            {postList.map((p) => {
              return (
                <div key={p.id} style={{paddingBottom: '2em'}}>
                  <h4>{p.title}</h4>
                  <div dangerouslySetInnerHTML={{__html: p.content}} />
                </div>
              )
            })}
          </div>
        }
      />
    )
  }
}

export default connect(mapStateToProps)(PostList)
