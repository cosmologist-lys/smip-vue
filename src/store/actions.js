import * as types from './mutation-types';

export const actions = {
  [types.SET_SESSION] ({commit}, obj){
    console.log('into main actions  ', obj);
    //commit(types.SET_SESSION, obj)
  }
}

/*
 export const actions = ({commit},obj)=>{
 console.log('into main.actions  ',obj)
 }*/
