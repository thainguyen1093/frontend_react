export function getUser(){
  return JSON.parse(localStorage.getItem('user'));
}

export function setUser(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

export function remove(key) {
  localStorage.removeItem(key);
}