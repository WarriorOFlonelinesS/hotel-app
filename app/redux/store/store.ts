import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducers/accountsSlice";
import roomsReducer from "./reducers/roomsSlice";
import { GET_ACCOUNTS, getAccountsSaga } from "./reducers/accountsSlice";
import { GET_ROOMS, getRoomsSaga } from "./reducers/roomsSlice";

const rootReducer = combineReducers({
  accountReducer,
  roomsReducer,
});

function* sagas() {
  yield takeEvery(GET_ACCOUNTS, getAccountsSaga);
  yield takeEvery(GET_ROOMS, getRoomsSaga);
}

export const setupStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware): any =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(sagas);

  return store;
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
