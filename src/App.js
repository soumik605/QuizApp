import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import QuizPage from "./Components/QuizPage/QuizPage";
import Result from "./Components/ResultPage/Result";
import React,{useEffect} from 'react'
import { useSelector } from "react-redux";


const theme = createTheme({});

function App() {


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
