import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  index: 0,
  difficulty: "any",
  tags: [],
  limit: 10,
  category:0,
  totalTime : 0
};

export const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    changeCurrentQuestionIndex: (state, action) => {
      return { ...state, index: action.payload };
    },

    changeDifficulty: (state, action) => {
      return { ...state, difficulty: action.payload };
    },

    changeLimit: (state, action) => {
      return { ...state, limit: action.payload };
    },

    changeCatagory: (state, action) => {
      return { ...state, category: action.payload };
    },

    changeTags: (state, action) => {
      return { ...state, Tags: action.payload };
    },

    updateTotalTime: (state, action) => {
      return { ...state, totalTime: state.totalTime + 1 };
    },

  },
});

export const { changeCurrentQuestionIndex, changeDifficulty, changeLimit, changeCatagory, changeTags, updateTotalTime } = currentQuestionSlice.actions;

export default currentQuestionSlice.reducer;
