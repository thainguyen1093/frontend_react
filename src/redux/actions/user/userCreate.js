import {
  USER_CREATE_CHANGE_PASSWORD,
  USER_CREATE_CHANGE_USERNAME,
  USER_CREATE_STATUS
} from "../../constants/ActionTypes";
import {apiStatus} from "../../constants/apiStatus";
import {userService} from "../../../general/services";

export const userCreateChangeUserName = username => ({
  type: USER_CREATE_CHANGE_USERNAME,
  username
})

export const userCreateChangePassword = password => ({
  type: USER_CREATE_CHANGE_PASSWORD,
  password
})

const userCreateLoading = () => ({
  type: USER_CREATE_STATUS,
  status: apiStatus.LOADING
})

const userCreateSuccess = (response) => ({
  type: USER_CREATE_STATUS,
  status: apiStatus.SUCCEEDED,
  message: "User Created Success"
})

const userCreateFail = (error) => ({
  type: USER_CREATE_STATUS,
  status: apiStatus.FAILED,
  message: "User Created Fail"
})

export const create = () => (dispatch, getState) => {
  const {userCreate} = getState();
  dispatch(userCreateLoading());

  return userService.create(userCreate)
  .then(response => {
    console.log("success");
    dispatch(userCreateSuccess(response))
  })
  .catch(error => {
    console.error(error);
    dispatch(userCreateFail(error))
  });
}