import { Box, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import trophy from "../Images/trophy.jpg";
import { useNavigate } from "react-router-dom";
import { resetFields } from "../../service/Reducers/CurrentQuestion";

const TopBar = () => {
  const allQuestion = useSelector((state) => state.allQuestion);
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (allQuestion) {
      var totalCorrectAns = 0;
      var totalWrongAns = 0;

      allQuestion.map((ques) => {
        if (ques.userAnswer) {
          if (ques.correct_answer === ques.userAnswer) {
            totalCorrectAns = totalCorrectAns + 1;
          } else {
            totalWrongAns = totalWrongAns + 1;
          }
        }
      });

      setRightAns(totalCorrectAns);
      setWrongAns(totalWrongAns);
    }
  }, [allQuestion]);

  const backToHome = () => {
    dispatch(resetFields());
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button variant="text" sx={{ m: 2, ml: "auto" }} onClick={backToHome}>
        Back to Home
      </Button>
      <img
        src={trophy}
        alt="trophy"
        style={{
          width: "200px",
          margin: "0 auto",
        }}
      />
      <Typography variant="h6" color="primary" sx={{ textAlign: "center" }}>
        Score - {rightAns} / {allQuestion.length}
      </Typography>
    </Box>
  );
};

export default TopBar;
