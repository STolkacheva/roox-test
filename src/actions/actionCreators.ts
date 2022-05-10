import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "./actionTypes";
  
export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {   
        dispatch({type: UserActionTypes.USERS_REQUEST})
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            
            dispatch({type:UserActionTypes.USERS_SUCCESS, payload: data});
        } catch (e) {
            dispatch({type:UserActionTypes.USERS_FAILURE, payload: "Ошибка загрузки"});
        }
    }
  };

  export const sortByCity = () => ({
    type: UserActionTypes.USERS_SORT_BY_CITY
  });

  export const sortByCompany = () => ({
    type: UserActionTypes.USERS_SORT_BY_COMPANY
  });