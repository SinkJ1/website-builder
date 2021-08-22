import { combineReducers } from 'redux'
import { elementReducer } from './page/reducers'
import { AppState } from './types'

export default combineReducers<AppState>({
    elements: elementReducer
})