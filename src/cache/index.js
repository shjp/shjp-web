const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

function set(key, value) {
  localStorage.setItem(key, value);
}

function get(key) {
  return localStorage.getItem(key);
}

function remove(key) {
  localStorage.removeItem(key);
}

export default {
  ACCESS_TOKEN_KEY,
  set,
  get,
  remove,
};
