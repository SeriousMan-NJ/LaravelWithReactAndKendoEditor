import { combineReducers } from 'redux'

import { postList } from './scenes/PostList/reducers'
import { editorValue } from './scenes/PostCreate/reducers'

const rootReducer = combineReducers({
  postList,
  editorValue
})

export default rootReducer
