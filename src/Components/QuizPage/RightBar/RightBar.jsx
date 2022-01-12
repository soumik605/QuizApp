import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeResponse } from "../../../service/Reducers/AllQuesReducer";
import { useNavigate } from "react-router-dom";
import Option from "./Option";
import BtmBtns from "./BtmBtns";
import { escape, unescape } from "html-escaper";
import Details from "./Details";

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
  const cqIndex = currentQuestion.index;
  const question = allQuestion[cqIndex];


  function unescape(s) {
    return s
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"');
  }

  const newQuestion = unescape(question.question);


  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        {allQuestion.length > 0 && question.userAnswer !== null && (
          <Button onClick={() => dispatch(removeResponse(cqIndex))}>
            Clear Response
          </Button>
        )}
      </Box>

      <Box maxWidth="md" className={classes.quesCont}>
        <Typography variant="h6" textAlign="center">
          {allQuestion.length > 0 && newQuestion}
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          sx={{ justifyContent: "center", mt: 2 }}
        >
          {allQuestion.length > 0 &&
            [0, 1, 2, 3].map((item, index) => {
              return (
                allQuestion[cqIndex].answers[item] && (
                  <Option
                    question={question}
                    item={item}
                    cqIndex={cqIndex}
                    key={item}
                  />
                )
              );
            })}
        </Box>
      </Box>

      <Box
        maxWidth="md"
        display="flex"
        sx={{ m: "80px auto 0" }}
        justifyContent={"space-between"}
      >
        <BtmBtns cqIndex={cqIndex} />
      </Box>
      <Details />
    </>
  );
};

export default RightBar;
