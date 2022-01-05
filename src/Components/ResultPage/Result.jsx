import { Container, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const Result = () => {
  const allQuestion = useSelector((state) => state.allQuestion);
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);

  useEffect(() => {
    if (allQuestion) {
      var totalCorrectAns = 0;
      var totalWrongAns = 0;

      allQuestion.map((ques) => {
        console.log(ques.correct_answer, ques.userAnswer);

        if (ques.userAnswer) {
          if (ques.correct_answer === ques.userAnswer) {
            console.log("Right Answer");
            console.log("----------------");
            totalCorrectAns = totalCorrectAns + 1;
          } else {
            console.log("Wrong Answer");
            console.log("----------------");
            totalWrongAns = totalWrongAns + 1;
          }
        } else {
          console.log("Not Answered");
          console.log("----------------");
        }
      });

      setRightAns(totalCorrectAns);
      setWrongAns(totalWrongAns);
    }
  }, [allQuestion]);

  return (
    <Container maxWidth="md" sx={{ m: "0 auto" }}>
      <Typography variant="h6">
        Total Questions - {allQuestion.length}
      </Typography>
      <Typography variant="h6">Right Answers - {rightAns}</Typography>
      <Typography variant="h6">Wrong Answers - {wrongAns}</Typography>
      <Typography variant="h6">
        No Answers - {allQuestion.length - rightAns - wrongAns}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Timeline position="right">
          {allQuestion.map((ques, index) => (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "12px 0", color: "#e3f2fd" }}
                align="right"
                variant="body2"
              >
                {ques.question}
              </TimelineOppositeContent>
              <TimelineSeparator>
                {index !== 0 && <TimelineConnector />}

                {ques.userAnswer === null ? (
                  <TimelineDot sx={{ backgroundColor: "#ffa726" }}>
                    <CloseIcon />
                  </TimelineDot>
                ) : ques.correct_answer === ques.userAnswer ? (
                  <TimelineDot sx={{ backgroundColor: "#388e3c" }}>
                    <DoneIcon />
                  </TimelineDot>
                ) : (
                  <TimelineDot sx={{ backgroundColor: "#d32f2f" }}>
                    <CloseIcon />
                  </TimelineDot>
                )}

                {index + 1 !== allQuestion.length && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#66bb6a", alignItems: "center" }}
                >
                  Correct Answer - {ques.correct_answer}
                </Typography>
                {ques.userAnswer !== null ? (
                  <Typography variant="subtitle2" sx={{ color: "#29b6f6" }}>
                    Your Answer - {ques.userAnswer}
                  </Typography>
                ) : (
                  <Typography variant="subtitle2" sx={{ color: "#ce93d8" }}>
                    You didn't answer
                  </Typography>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default Result;
