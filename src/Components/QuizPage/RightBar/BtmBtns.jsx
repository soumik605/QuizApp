import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { changeCurrentAsVisited, updateMark } from "../../../service/Reducers/AllQuesReducer";
import { changeCurrentQuestionIndex } from "../../../service/Reducers/CurrentQuestion";

const BtmBtns = ({ cqIndex }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allQuestion = useSelector((state) => state.allQuestion);

  const prevQuestion = () => {
    dispatch(changeCurrentQuestionIndex(cqIndex - 1));
    dispatch(changeCurrentAsVisited(cqIndex - 1));
  };

  const nextQuestion = () => {
    dispatch(changeCurrentQuestionIndex(cqIndex + 1));
    dispatch(changeCurrentAsVisited(cqIndex + 1));
  };

  const updateAsMark = () => {
    dispatch(updateMark(cqIndex))
  }

  return (
    <>
      {cqIndex !== 0 && (
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          onClick={prevQuestion}
        >
          Previous
        </Button>
      )}


      {allQuestion[cqIndex].markToReview ? (
        <Button type="text" onClick={updateAsMark}>Remove Mark</Button>
      ) : (
        <Button type="text" onClick={updateAsMark}>Mark to Review</Button>
      )}


      {cqIndex + 1 !== allQuestion.length ? (
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={nextQuestion}
        >
          Next
        </Button>
      ) : (
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/result")}
        >
          Submit
        </Button>
      )}


    </>
  );
};

export default BtmBtns;
