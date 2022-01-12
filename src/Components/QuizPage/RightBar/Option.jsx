import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { answerAQuestion } from "../../../service/Reducers/AllQuesReducer";

const Option = ({ question, item, cqIndex }) => {
  const dispatch = useDispatch();

  function unescape(s) {
    return s
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"');
  }
  const newOption = unescape(question.answers[item]);

  const answerQuestion = (item) => {
    dispatch(
      question.userAnswer !== item &&
        answerAQuestion({ questionIndex: cqIndex, answer: item })
    );
  };

  return (
    <Button
      color={
        question.userAnswer === question.answers[item] ? "secondary" : "info"
      }
      variant={
        question.userAnswer === question.answers[item]
          ? "contained"
          : "outlined"
      }
      key={item}
      sx={{ width: "40%", margin: 1, boxSizing: "border-box" }}
      onClick={() => answerQuestion(question.answers[item])}
    >
      {newOption}
    </Button>
  );
};

export default Option;
