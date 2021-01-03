import {
  USER_CREATE,
  USER_CREATE_CHANGE_PASSWORD,
  USER_CREATE_CHANGE_USERNAME,
  USER_CREATE_STATUS
} from "../constants/ActionTypes"
import {apiStatus} from "../constants/apiStatus";


let initCreateUserStatus = {
  status: apiStatus.NOTHING,
  message: ""
}
export function userCreateStatus(state = initCreateUserStatus, action) {
  switch (action.status) {
    case apiStatus.NOTHING:
      return {
        status: apiStatus.NOTHING,
        message: ""
      }
    case apiStatus.LOADING:
      return {
        status: apiStatus.LOADING,
        message: "loading"
      }
    case apiStatus.SUCCEEDED:
      return {
        status: apiStatus.SUCCEEDED,
        message: action.message
      }
    case apiStatus.FAILED:
      return {
        status: apiStatus.FAILED,
        message: action.message
      }
    default:
      return state
  }
}

let initState = {
  username: "thai",
  password: "thai"
};
export function userCreate(state = initState, action) {
  switch (action.type) {
    case USER_CREATE_CHANGE_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case USER_CREATE_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    case USER_CREATE:
      const {username, password} = action
      return {username, password};
    default:
      return state;
  }
}