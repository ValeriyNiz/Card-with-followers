export const set = (key, value) => {
  localStorage.setItem(key, value);
};

export const get = key => {
  return localStorage.getItem(key);
};
