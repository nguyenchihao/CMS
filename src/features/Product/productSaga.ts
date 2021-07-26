import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeLatest } from "redux-saga/effects";
import { productApi } from "../../apis/productApi";
import { Product } from "../../models";
import { ListParams, ListResponse } from "../../models/common";
import { getProducts } from "./productSlice";

function* handleFetchProducts(action: PayloadAction<ListParams>) {
  console.log(action.payload);
  const data: ListResponse<Product> = yield call(productApi.getProducts, action.payload);
  console.log(data);
}

export default function* productSaga() {
  yield takeLatest(getProducts.type, handleFetchProducts);
}
