import { UpdateUserAction, USER_ACTIONS } from 'store/user/actions';

const INITAL_STATE = {};

export const reducer = (state = INITAL_STATE, action: UpdateUserAction) => {
  switch (action.type) {
    case USER_ACTIONS.UPDATE:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}
