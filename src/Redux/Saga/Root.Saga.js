import { all } from "redux-saga/effects";
import { AllProductWatcher } from "./Product.Watcher";

export function* rootSaga() {
  const arr = [AllProductWatcher()];
  yield all(arr);
}
