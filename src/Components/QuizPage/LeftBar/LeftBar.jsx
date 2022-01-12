import {
  Container,
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentQuestionIndex } from "../../../service/Reducers/CurrentQuestion";
import { changeCurrentAsVisited } from "../../../service/Reducers/AllQuesReducer";

const LeftBar = () => {
  const allQuestion = useSelector((state) => state.allQuestion);
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const dispatch = useDispatch();

  const QuestionIndexClick = (index) => {
    dispatch(changeCurrentQuestionIndex(index));
    dispatch(changeCurrentAsVisited(index));
  };

  return (
    <Box>
      <Box sx={{ p: "16px 0" }}>
        <Avatar src="" alt="avatar" sx={{ m: "0 auto" }} />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Soumik Maity
        </Typography>
      </Box>

      <Grid container sx={{ p: 1 }} spacing={1}>
        {allQuestion.map((item, index) => (
          <Grid item xs={4} md={3} key={item.question}>
            <Button
              variant={item.visited ? "contained" : "outlined"}
              color={
                currentQuestion.index === index
                  ? "warning"
                  : item.userAnswer !== null
                  ? "success"
                  : "info"
              }
              sx={{ width: "100%" }}
              onClick={() => QuestionIndexClick(index)}
            >
              {index + 1}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 10, display: "flex", flexDirection: "column" }}>
        <Button
        size="small"
          color="info"
          variant="contained"
          sx={{ width: "fit-content", m: 1 }}
        >
          Visited Question
        </Button>
        <Button
        size="small"
          color="success"
          variant="contained"
          sx={{ width: "fit-content", m: 1 }}
        >
          Answered Question
        </Button>
        <Button
        size="small"
          color="warning"
          variant="contained"
          sx={{ width: "fit-content", m: 1 }}
        >
          Current Question
        </Button>
        <Button
        size="small"
          color="info"
          variant="outlined"
          sx={{ width: "fit-content", m: 1 }}
        >
          Not visited
        </Button>
      </Box>
    </Box>
  );
};

export default LeftBar;
