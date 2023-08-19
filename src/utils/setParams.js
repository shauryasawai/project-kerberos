export function setParams(params) {
  const keys = Object.keys(params);
  const values = Object.values(params);
  const setParams = keys.map((key, index) => `${key}=${values[index]}`).join('&');
  return setParams;
}
