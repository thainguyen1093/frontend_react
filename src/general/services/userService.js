import config from "../config/config.json";
import {getFullURL} from "./common/configService";
import * as api from "../api/api";

function getUserPath() {
  return config.path.user;
}

function getUserURL() {
  return getFullURL(getUserPath());
}

export function search(data) {
  return api.search(getUserURL(), data);
}

export function getById(id) {
  return api.getById(getUserURL(), id);
}

export function create(data) {
  return api.create(getUserURL(), data);
}

export function update(id, data) {
  return api.update(getUserURL(), id, data);
}

export function deleteById(id) {
  return api.deleteById(getUserURL(), id);
}
