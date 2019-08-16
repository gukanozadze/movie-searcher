import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import movieReducer from './movieReducer.js'


export default combineReducers({
  movie: movieReducer,
  form: formReducer
})