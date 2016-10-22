import { UPDATE_EXPRESSION } from './constants';

const initialState = '(x || y) && !z';

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_EXPRESSION:
      return action.payload.expression;

    default:
      return state;
  }
}
