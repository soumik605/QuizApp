import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import QuizPage from "./Components/QuizPage/QuizPage";
import Result from "./Components/ResultPage/Result";
import {
  changeCurrentAsVisited,
  fetchNewQuestions,
} from "./service/Reducers/AllQuesReducer";

const theme = createTheme({});

function App() {
  const allQuestion = useSelector((state) => state.allQuestion);
  const dispatch = useDispatch();

  const fetchQues = async () => {
    await axios
      .get(
        // `https://quizapi.io/api/v1/questions?apiKey=fFXpTRLGchvxKjf8DI4ylPojjAPFD1zSxT3ZmByh&limit=${10}`
        `https://opentdb.com/api.php?amount=10&category=18`
      )
      .then((res) => {
        console.log(res.data.results);

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
          });
        });
        dispatch(fetchNewQuestions(allQuestion));
        dispatch(changeCurrentAsVisited(0));
      });
  };

  useEffect(() => {
    fetchQues();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/quiz" element={<QuizPage />}></Route>
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
