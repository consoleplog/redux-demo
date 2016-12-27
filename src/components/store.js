import { createStore } from 'redux';


let comments = [
  {autor:'asd',content:'www'},
  {autor:'www1',content:'www'}
]

function commentReducer(state = [], action) {
  switch(action.type){
    case 'asd':
    return [...state,action.data1]
    default:
    return state;
  }
}



let store = createStore(commentReducer, comments);

export default store;
