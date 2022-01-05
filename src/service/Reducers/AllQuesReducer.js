import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const allQuestionSlice = createSlice({
  name: "allQuestions",
  initialState,
  reducers: {
    fetchNewQuestions: (state, action) => {
      return action.payload;
    },

    changeCurrentAsVisited: (state, action) => {
      return state.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            visited: true,
          };
        } else {
          return item;
        }
      });
    },

    answerAQuestion: (state, action) => {
      return state.map((item, index) => {
        if (index === action.payload.questionIndex) {
          return {
            ...item,
            userAnswer: action.payload.answer,
          };
        } else {
          return item;
        }
      });
    },

    removeResponse: (state, action) => {
      return state.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            userAnswer: null,
          };
        } else {
          return item;
        }
      });
    },
  },
});

export const {
  fetchNewQuestions,
  changeCurrentAsVisited,
  answerAQuestion,
  removeResponse,
} = allQuestionSlice.actions;

export default allQuestionSlice.reducer;
