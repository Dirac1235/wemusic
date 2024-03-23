import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actions";

function* usersFetch() {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/playlist/547789765";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "27e401d529mshcfbe2a92dc13361p1726abjsn181dc5be0764",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  try {
    const response = yield call(fetch, url, options);

    // Check for network errors
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const songsData = yield response.json();
    const songs = songsData.tracks.data.filter((songs) => songs.preview != "");
    console.log(songs);
    yield put({ type: FETCH_USERS_SUCCESS, songs });
  } catch (error) {
    console.error(error.message);
    const message = error.message;
    yield put({ type: FETCH_USERS_FAILURE, message });
  }
}

function* mySaga() {
  yield takeEvery(FETCH_USERS_REQUEST, usersFetch);
}

export default mySaga;
