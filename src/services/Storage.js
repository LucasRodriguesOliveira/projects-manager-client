function keyPrefix(key) {
  return `@App:${key}`;
}

export function add(key, value, stringify = true) {
  localStorage.setItem(
    keyPrefix(key),
    stringify ? JSON.stringify(value) : value,
  );
}

export function get(key) {
  return localStorage.getItem(keyPrefix(key));
}

export function remove(key) {
  localStorage.removeItem(keyPrefix(key));
}
