export default {
  GET : {
    findAll : `/community/find`
  },
  POST : {
    query : `/community/find/one`
  },
  DELETE :{
    byId : `/community/delete/one`,
    one : `/community/delete/one`,
    many :`/community/delete/many`
  },
  PUT : {
    one : `/community/save/one`,
    many : `/community/save/many`
  }
}
