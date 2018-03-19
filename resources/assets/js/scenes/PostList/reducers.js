import { RECEIVE_POST_LIST } from './constants'

export function postList(state=[], action) {
  switch (action.type) {
    case RECEIVE_POST_LIST:
      return [
        ...action.postList
      ]
    default:
      return state
  }
}
