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
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const allQuestion = useSelector((state) => state.allQuestion);
  const { status } = useSelector((state) => state.currentQuestion);
  const navigate = useNavigate()

  useEffect(() => {
    status !== "finished" && navigate("/");
  }, []);

  function unescape(s) {
    return s
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"');
  }

  return (
    <Container maxWidth="md" sx={{ m: "0 auto" }}>
      <TopBar />

      <Box sx={{ mt: 3 }}>
        <Timeline position="right">
          {allQuestion.map((ques, index) => {
            var timestamp = ques.timeTaken;
            var hours = Math.floor(timestamp / 60 / 60);
            var minutes = Math.floor(timestamp / 60) - hours * 60;
            var seconds = timestamp % 60;
            const newQuestion = unescape(ques.question);

            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "12px 0" }}
                  align="right"
                  variant="body2"
                >
                  {newQuestion}
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
                  <Typography variant="body2">
                    Time Taken - {minutes}min {seconds}sec
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>
    </Container>
  );
};

export default Result;
