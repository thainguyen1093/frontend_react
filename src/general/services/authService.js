/**
 * This service using for login/logout or any function like that
 * */

import config from "../config/config.json";
import * as configService from "./common/configService"
import {setUser, remove} from "./common/localStorage";
import * as api from "../api/api";
import {methods} from "../constant/method";

import { toast } from 'react-toastify';

function getLoginPath() {
  return config.path.auth.login;
}

export function getLoginURL() {
  return configService.getFullURL(getLoginPath());
}

function getLogoutPath() {
  return config.path.auth.logout;
}

export function getLogoutURL() {
  return configService.getFullURL(getLogoutPath());
}

export function login(data) {
  return api.call(methods.POST, getLoginURL(), data)
  .then((response) => {
    if (response.data.accessToken) {
      setUser(response.data);
      toast.success("Login success");
    }

    return response.data;
  })
  .catch(error => {
    toast.error("Login fail");
  });
}

export function logout() {
  remove("user");
}

