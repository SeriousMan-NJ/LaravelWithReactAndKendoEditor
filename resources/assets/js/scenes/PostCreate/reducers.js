import { EDITOR_VALUE } from './constants'

export function editorValue(state='', action) {
  switch (action.type) {
    case EDITOR_VALUE:
      return action.value
    default:
      return state
  }
}
