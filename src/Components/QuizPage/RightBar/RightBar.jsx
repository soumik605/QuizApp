import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  answerAQuestion,
  changeCurrentAsVisited,
  removeResponse,
} from "../../../service/Reducers/AllQuesReducer";
import { changeCurrentQuestionIndex } from "../../../service/Reducers/CurrentQuestion";
import { useNavigate } from "react-router-dom";

const style = makeStyles((theme) => ({
  quesCont: {
    margin: "24px auto 8px",
  },
}));

const RightBar = () => {
  const classes = style();
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const allQuestion = useSelector((state) => state.allQuestion);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const answerQuestion = (item) => {
    console.log(item)
    dispatch(
      allQuestion[currentQuestion.index].userAnswer !== item &&
        answerAQuestion({ questionIndex: currentQuestion.index, answer: item })
    );
  };

  const prevQuestion = () => {
    dispatch(changeCurrentQuestionIndex(currentQuestion.index - 1));
    dispatch(changeCurrentAsVisited(currentQuestion.index - 1));
  };

  const nextQuestion = () => {
    dispatch(changeCurrentQuestionIndex(currentQuestion.index + 1));
    dispatch(changeCurrentAsVisited(currentQuestion.index + 1));
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        {allQuestion.length > 0 &&
          allQuestion[currentQuestion.index].userAnswer !== null && (
            <Button
              onClick={() => dispatch(removeResponse(currentQuestion.index))}
            >
              Clear Response
            </Button>
          )}
      </Box>

      <Box maxWidth="md" className={classes.quesCont}>
        <Typography variant="h6" textAlign="center">
          {allQuestion.length > 0 &&
            allQuestion[currentQuestion.index].question}
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          sx={{ justifyContent: "center", mt: 2 }}
        >
          {allQuestion.length > 0 &&
            [0, 1, 2, 3].map((item, index) => (
              <Button
                color={
                  allQuestion[currentQuestion.index].userAnswer ===
                  allQuestion[currentQuestion.index].answers[item]
                    ? "secondary"
                    : "info"
                }
                variant={
                  allQuestion[currentQuestion.index].userAnswer ===
                  allQuestion[currentQuestion.index].answers[item]
                    ? "contained"
                    : "outlined"
                }
                key={item}
                sx={{ width: "40%", margin: 1, boxSizing: "border-box" }}
                onClick={() => answerQuestion(allQuestion[currentQuestion.index].answers[item])}
              >
                {allQuestion[currentQuestion.index].answers[item]}
              </Button>
            ))}
        </Box>
      </Box>
      <Box
        maxWidth="md"
        display="flex"
        sx={{ m: "80px auto 0" }}
        justifyContent={
          currentQuestion.index === 0 ? "flex-end" : "space-between"
        }
      >
        {currentQuestion.index !== 0 && (
          <Button
            variant="text"
            startIcon={<ArrowBackIcon />}
            onClick={prevQuestion}
          >
            Previous
          </Button>
        )}
        {currentQuestion.index + 1 !== allQuestion.length ? (
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
      </Box>
    </>
  );
};

export default RightBar;
