export const SetListened = "setListened";
export const SetSong = "setSong";
export const SetIsLoading = "setIsLoading";
export const SetError = "setError";
export const SetSelectedId = "setSelectedId";
export const SetQuery = "setQuery";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";


export const setQuery = (value) => ({
  type: SetQuery,
  payload: value,
});
export const setListened = (value) => ({
  type: SetListened,
  payload: value,
});
export const setError = (value) => ({
  type: SetError,
  payload: value,
});
export const setSelectedId = (value) => ({
  type: SetSelectedId,
  payload: value
});
export const setIsLoading = (value) => ({
  type: SetIsLoading,
  payload: value,
});

export const setSongs = (value) => ({
  type: SetSong,
  payload: value,
});

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};