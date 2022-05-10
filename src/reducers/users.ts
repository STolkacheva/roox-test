import { UserAction, UserActionTypes, UserState } from "../actions/actionTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export default function userReducer(state: UserState = initialState, action: UserAction ): UserState {
  switch (action.type) {
    case UserActionTypes.USERS_REQUEST: {
      return {
        users: [],
        loading: true,
        error: null,
      };
    }
    case UserActionTypes.USERS_FAILURE: {
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    }
    case UserActionTypes.USERS_SUCCESS: {
      return {
        users: action.payload,
        loading: false,
        error: null,
      };
    }
    case UserActionTypes.USERS_SORT_BY_CITY: {
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.address.city.localeCompare(b.address.city)
        ),
      };
    }
    case UserActionTypes.USERS_SORT_BY_COMPANY: {
      return {
        ...state,
        users: state.users.sort((a, b) =>
          a.company.name.localeCompare(b.company.name)
        ),
      };
    }
    default:
      return state;
  }
}
