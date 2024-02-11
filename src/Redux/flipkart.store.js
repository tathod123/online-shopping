import { configureStore } from "@reduxjs/toolkit";
import reducer from "./flikart.combine.reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./Saga/Root.Saga";

const sagaMiddlewareStore = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddlewareStore),
});

sagaMiddlewareStore.run(rootSaga);
export default store;
