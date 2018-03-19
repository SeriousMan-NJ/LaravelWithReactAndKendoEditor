import { RECEIVE_POST_LIST } from './constants'

function receivePostList(postList) {
  return {
    type: RECEIVE_POST_LIST,
    postList
  }
}

export function fetchPostList() {
  return dispatch => {
    return fetch(`http://homestead.test/api/post`)
      .then(response => response.json())
      .then(json => dispatch(receivePostList(json)))
  }
}
