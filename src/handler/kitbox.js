export const notEmpty = obj => {
  if (obj === null || obj === undefined)
    return false;
  if (typeof obj === 'object')
    return !Object.keys(obj).length === 0;
  if (typeof obj === 'string')
    return !Object.keys(obj).length === 0;
  if (typeof obj === 'undefined')
    return false;
};
