import { takeLatest } from "redux-saga/effects";
import { allProductSaga } from "../flipkart.slice";
import { AllProductHandler } from "./Product.handler";

export function* AllProductWatcher() {
  yield takeLatest(allProductSaga.type, AllProductHandler);
}
