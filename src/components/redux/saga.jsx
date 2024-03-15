import { call, put, takeEvery } from 'redux-saga/effects'; 
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actions';


function* usersFetch() {
    try {
        console.log("I Was Called");
        const response = yield call(fetch, "https://jsonplaceholder.typicode.com/posts");
        
        // Check for network errors
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const songs = yield response.json();
        yield put({ type: FETCH_USERS_SUCCESS, songs });
    } catch (error) {
        console.error(error.message);
        const message = error.message
        yield put({ type: FETCH_USERS_FAILURE, message });
    }
}



function* mySaga() { 
    yield takeEvery(FETCH_USERS_REQUEST, usersFetch); 
}

export default mySaga;
