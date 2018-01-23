import * as kitbox from '@/handler/kitbox.js';

export const submitDialog = form => {
  console.log('dialog submit')
  //todo 提交post
}

export const closeDialog = (formCopy, index, funcname, emit) => {
  console.log(formCopy.discribe, index)
  emit(funcname, formCopy, index)
}
export const initCopy = (val, index) => {
  this.index = index;
  console.log('init', val)
  return kitbox.deepCopy(val);
}
