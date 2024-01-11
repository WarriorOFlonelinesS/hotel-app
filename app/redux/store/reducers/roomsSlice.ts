import { IRooms } from "../../../module";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";
import { getRoomsApi } from "../../getRoomsApi";

interface RoomsState {
  rooms: IRooms[];
  isLoading: boolean;
  error?: string;
  count: number;
}

export function* getRoomsSaga(): any {
  const payload = yield getRoomsApi().then((response: any) =>
    response.map((item: any) => item)
  );
  yield put(getRoomsSuccess(payload));
}

const initialState: RoomsState = {
  rooms: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const roomSlice: any = createSlice({
  name: "room",
  initialState,
  reducers: {
    getRoomsSuccess: (state, action) => {
      state.rooms = action.payload;
    },
  },
});

export const GET_ROOMS = "room/GetRooms";
export const getRooms = createAction(GET_ROOMS);

export const { getRoomsSuccess } = roomSlice.actions;

export default roomSlice.reducer;
