import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  index: 0,
};

export const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    changeCurrentQuestionIndex: (state, action) => {
      return { ...state, index: action.payload };
    },
   
  },
});

export const { changeCurrentQuestionIndex } = currentQuestionSlice.actions;

export default currentQuestionSlice.reducer;
