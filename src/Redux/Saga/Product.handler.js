import { call, put } from "redux-saga/effects";
import { AllProduct } from "./Product.Service";
import { allProductRedux } from "../flipkart.slice";

export function* AllProductHandler() {
  try {
    const allProductData = yield call(AllProduct);
    yield put(allProductRedux(allProductData));
  } catch (error) {
    console.log("server.error");
  }
}
