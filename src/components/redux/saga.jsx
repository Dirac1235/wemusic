import { call, put, takeEvery } from 'redux-saga/effects'; // Correct import statement
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actions';

// Function to fetch users
function* usersFetch() { // Changed to a generator function
    
    try {
        console.log("I Was Called")
        const response = yield call(fetch, "https://jsonplaceholder.typicode.com/posts");
        const songs = yield response.json();
        yield put({ type: FETCH_USERS_SUCCESS, songs }); // Corrected action dispatch
    } catch (error) {
        console.error(error.message)
        yield put({FETCH_USERS_FAILURE, error})
    }
}

// Watcher saga
function* mySaga() { // Changed to a generator function
    yield takeEvery(FETCH_USERS_REQUEST, usersFetch); // Corrected function reference
}

export default mySaga;
