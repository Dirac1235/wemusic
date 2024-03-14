import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reduce from "./reducers";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reduce,
  middleware: () => [sagaMiddleware]
});
sagaMiddleware.run(mySaga)
