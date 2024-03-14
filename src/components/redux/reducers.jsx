import {
  SetError,
  SetIsLoading,
  SetSong,
  SetQuery,
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
    case SetQuery:
      return {
        ...state,
        query: action.payload,
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
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        songs: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
