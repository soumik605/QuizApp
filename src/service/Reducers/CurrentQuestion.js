import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  index: 0,
  difficulty: "any",
  tags: [],
  limit: 10,
  category: 0,
  totalTime: 0,
  status : "notStarted"
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

    updateTotalTime: (state, action) => {
      return { ...state, totalTime: state.totalTime + 1 };
    },

    resetFields: (state, action) => {
      return initialState;
    },

    setStatus : (state, action) => {
      return {...state, status : action.payload}
    }

  },
});

export const { changeCurrentQuestionIndex, changeDifficulty, changeLimit, changeCatagory, updateTotalTime, resetFields, setStatus } = currentQuestionSlice.actions;

export default currentQuestionSlice.reducer;
