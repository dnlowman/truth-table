import { UPDATE_EXPRESSION } from './constants';

export function updateExpression(expression) {
  return {
    type: UPDATE_EXPRESSION,
    payload: {
      expression
    }
  }
}
