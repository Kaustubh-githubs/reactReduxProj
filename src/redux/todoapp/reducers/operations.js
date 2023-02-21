import { ADD_TODO, DELETE_ALL } from "../actions";

const initialState=[
//  we can add initial state of req...
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        default: return state;
    }
}