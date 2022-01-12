import { Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Category from "./Category";
import Difficult from "./Difficult";
import Tags from "./Tags";
import Limit from "./Limit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentAsVisited,
  fetchNewQuestions,
} from "../../service/Reducers/AllQuesReducer";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Error from "./Error";
import LoadingPage from "./LoadingPage";

const style = makeStyles((theme) => ({
  inputCont: {
    padding: theme.spacing(1),
    width: "100%",
    margin: "20vh auto 0",
    justifyContent: "center",
  },
}));

const Landing = () => {
  const classes = style();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  var { difficulty, limit, category } = useSelector(
    (state) => state.currentQuestion
  );

  const fetchQues = async () => {
    setOpen(true);
    if (difficulty === "any") {
      difficulty = "";
    }

    await axios
      .get(
        `https://opentdb.com/api.php?amount=${limit}&category=${category}&difficulty=${difficulty}`
      )
      .then((res) => {
        const allQuestion = [];
        res.data.results.map((data) => {
          const allAnswers = [
            data.incorrect_answers[0],
            data.incorrect_answers[1],
            data.incorrect_answers[2],
            data.correct_answer,
          ];

          allQuestion.push({
            question: data.question,
            answers: allAnswers.slice().sort(() => Math.random() - 0.5),
            correct_answer: data.correct_answer,
            category: data.category,
            difficulty: data.difficulty,
            visited: false,
            userAnswer: null,
            timeTaken : 0,
            markToReview : false,
          });
        });
        dispatch(fetchNewQuestions(allQuestion));
        dispatch(changeCurrentAsVisited(0));
        setOpen(false);
        navigate("/quiz");
      })
      .catch((err) => {
        setShowError(true);
        setOpen(false);
      });
  };

  return (
    <>
      <Error showError={showError} setShowError={setShowError} />

      <Container>
        <Box className={classes.inputCont}>
        <LoadingPage open={open} setOpen={setOpen} />
          <Category />
          <Difficult />
          <Limit />

          <Box display="flex" sx={{justifyContent:"center"}}>
            <Button
              variant="contained"
              color="success"
              sx={{ m: 1 }}
              onClick={fetchQues}
            >
              Start
            </Button>
            <Button variant="contained" sx={{ m: 1 }}>
              Reset
            </Button>
            <Button variant="contained" color="warning" sx={{ m: 1 }}>
              Random Quiz
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Landing;
