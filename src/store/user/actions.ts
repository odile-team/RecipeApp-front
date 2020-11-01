export type USER_ACTIONS_TYPE = {
  UPDATE: string;
};

export const USER_ACTIONS: USER_ACTIONS_TYPE = {
  UPDATE: 'USER_ACTIONS/UPDATE',
}git ;

export interface UpdateUserAction {
  type: string;
  // TODO : create User type
  payload: any;
}

export const updateUser = (user: any) => ({ type: USER_ACTIONS.UPDATE, payload: user });
