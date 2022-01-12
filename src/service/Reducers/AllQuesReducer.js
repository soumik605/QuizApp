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

    updateWatchTime: (state, action) => {
      return state.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            timeTaken: item.timeTaken + 1,
          };
        } else {
          return item;
        }
      });
    },

    updateMark: (state, action) => {
      return state.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            markToReview: !item.markToReview,
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
  updateWatchTime,
  updateMark
} = allQuestionSlice.actions;

export default allQuestionSlice.reducer;
