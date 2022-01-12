import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
  const cQues = useSelector((state) => state.currentQuestion);
  const allQuestion = useSelector((state) => state.allQuestion);

  const category = allQuestion[cQues.index].category;
  const difficulty = allQuestion[cQues.index].difficulty;
  return (
    <Box sx={{ mt: 10 }}>
      <Box display="flex" alignItems="center">
        <Typography component="h6">Category :</Typography>
        <Typography variant="h6" color="primary">
          <pre sx={{ m: 0 }}> {category}</pre>
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <Typography component="h6">Difficulty :</Typography>
        <Typography
          variant="h6"
          color={
            difficulty === "hard"
              ? "error"
              : difficulty === "medium"
              ? "secondary"
              : "primary"
          }
        >
          <pre sx={{ m: 0 }}> {difficulty}</pre>
        </Typography>
      </Box>
    </Box>
  );
};

export default Details;
