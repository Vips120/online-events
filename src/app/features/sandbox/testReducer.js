export const INCREMENT_NUMBER = "INCREMENT_NUMBER";
export const DECREMENT_NUMBER = "DECREMENT_NUMBER";

// ACTION CREATOR FOR  incrementAction
export function incrementAction(count) {
 return {type: INCREMENT_NUMBER, payload: count};
};

// Action CREATOR FRO decrementAction

export function decrementAction(count) {
    return {type: DECREMENT_NUMBER, payload: count};
}


const initialState = {
    data:10
};

export default function testReducer(state=initialState,action) {
  switch(action.type) {
      case INCREMENT_NUMBER:
          return  {...state, data: state.data + action.payload};
    case DECREMENT_NUMBER:
        return {...state, data: state.data - action.payload};
    default:
        return state;
  }
};
