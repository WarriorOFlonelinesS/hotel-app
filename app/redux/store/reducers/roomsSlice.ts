import { IRooms } from "../../../module";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";
import { getRoomsApi } from "../../getRoomsApi";
import { error } from "console";
import { TRoom } from "@/app/components/types";

interface RoomsState {
  rooms: IRooms[];
  isLoading: boolean;
  error?: string;
}

export function* getRoomsSaga() {
  try {
    // @ts-ignore
    const payload = yield getRoomsApi().then((response: TRoom[]) =>
      response.map((item: TRoom) => item)
    );
    yield put(getRoomsSuccess(payload));
  } catch (error) {
    yield put(getRoomsFailure(error));
  }
}

const initialState: RoomsState = {
  rooms: [],
  isLoading: false,
  error: "",
};

export const roomSlice: any = createSlice({
  name: "room",
  initialState,
  reducers: {
    getRoomsSuccess: (state, action) => {
      state.rooms = action.payload;
      state.isLoading = false;
    },
    getRoomsFailure(state, action) {
      state.error = action.payload, 
      state.isLoading = false;
    },
  },
});

export const GET_ROOMS = "room/GetRooms";
export const getRooms = createAction(GET_ROOMS);

export const { getRoomsSuccess, getRoomsFailure } = roomSlice.actions;

export default roomSlice.reducer;
