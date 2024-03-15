import {
  SetError,
  SetIsLoading,
  SetSong,
  SetQueryData,
  SetSelectedId,
  SetListened,
} from "./actions";
import { initialState } from "./state";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actions";

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SetError:
      return {
        ...state,
        error: action.payload,
      };
    case SetSelectedId:
      return {
        ...state,
        selectedId: action.payload,
      };
    case SetIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SetSong:
      return {
        ...state,
        songs: action.payload,
      };
    case SetQueryData:
      return {
        ...state,
        queryData: action.payload,
      };
    case SetListened:
      return {
        ...state,
        listened: action.payload,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        songs: action.songs,
        queryData:action.songs,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        songs: [],
        error: action.message,
      };
    default:
      return state;
  }
}
