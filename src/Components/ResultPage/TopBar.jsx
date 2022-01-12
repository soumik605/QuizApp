import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import trophy from '../Images/trophy.jpg'

const TopBar = () => {
  const allQuestion = useSelector((state) => state.allQuestion);
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);

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

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <img
        src={trophy}
        alt="trophy"
        style={{
          width: "200px",
          margin: "0 auto",
        }}
      />
      <Typography variant="h6" color="primary" sx={{ textAlign: "center" }}>
        Score -  {rightAns} / {allQuestion.length}
      </Typography>
    </Box>
  );
};

export default TopBar;
