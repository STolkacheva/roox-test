export enum UserActionTypes {
  USERS_REQUEST = "USERS_REQUEST",
  USERS_FAILURE = "USERS_FAILURE",
  USERS_SUCCESS = "USERS_SUCCESS",
  USERS_SORT_BY_CITY = "USERS_SORT_BY_CITY",
  USERS_SORT_BY_COMPANY = "USERS_SORT_BY_COMPANY",
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

interface FetchUserAction {
  type: UserActionTypes.USERS_REQUEST;
}

interface FetchUserErrorAction {
  type: UserActionTypes.USERS_FAILURE;
  payload: string;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.USERS_SUCCESS;
  payload: any[];
}

interface UserSortByCityAction {
  type: UserActionTypes.USERS_SORT_BY_CITY;
}

interface UserSortByCompanyAction {
  type: UserActionTypes.USERS_SORT_BY_COMPANY;
}

export type UserAction =
  | FetchUserAction
  | FetchUserErrorAction
  | FetchUserSuccessAction
  | UserSortByCityAction
  | UserSortByCompanyAction;
