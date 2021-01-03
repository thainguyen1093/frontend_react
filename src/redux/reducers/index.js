import { combineReducers } from 'redux'
import auth from './authen'
import {userCreateStatus, userCreate} from "./userCreate";

const rootReducer = combineReducers({
   auth,
   userCreateStatus,
   userCreate
})

export default rootReducer