/**
 * 非空
 * @param obj
 * @returns {boolean}
 */
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
/**
 * 正则验证
 * @param type
 * @param value
 * @returns {boolean}
 */
export const reg = (type, value) => {
  let reg = '';
  switch (type.toLowerCase().toString()) {
    case 'number': //纯数字
      reg = new RegExp("^[0-9]*$");
      break;
    case 'positive-number': //正整数
      reg = new RegExp('^[1-9]\d*|0$')
      break;
    case 'two-demical': //2位小数
      reg = new RegExp("^[0-9]+(.[0-9]{2})?$");
      break;
    case  'chinese':  //中文
      reg = new RegExp("^[\u4e00-\u9fa5]{0,}$");
      break;
    case 'string':   //字符串
      reg = new RegExp("^[\u4E00-\u9FA5A-Za-z0-9_]+$");
      break;
    case 'email': //EMAIL
      reg = new RegExp("^\w+([-+.]\w+)@\w+([-.]\w+).\w+([-.]\w+)*$");
      break;
    case 'domain':  //域名,不包含url
      reg = new RegExp("[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?");
      break;
    case 'url': //internet类型，包含http的url
      reg = new RegExp("[a-zA-z]+://[^\s] 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=])?$");
      break;
    case 'cellphone':   //手机
      reg = new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$");
      break;
    case 'tel':   //座机
      reg = new RegExp("^((\d{3,4}-)|\d{3.4}-)?\d{7,8}$");
      break;
    case 'id-number': //身份证
      reg = new RegExp("^\d{15}|\d{18}$");
      break;
  }
  return reg.test(value)
};
/**
 * 深拷贝。得到2个内存地址。
 * 直接复制的方式始终只有1个内存地址
 * @param source
 * @returns {{}}
 */
export const deepCopy = (source)=> {
  let result={};
  for (let key in source) {
    result[key] = typeof source[key]=== 'object' ? deepCopy(source[key]): source[key];
  }
  return result;
};
