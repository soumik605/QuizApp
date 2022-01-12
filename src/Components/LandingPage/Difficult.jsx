import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDifficulty } from "../../service/Reducers/CurrentQuestion";

const style = makeStyles((theme) => ({
  inputBox: {
    alignItems: "center",
    display: "flex",
    marginBottom: theme.spacing(1),
    justifyContent: "center",
  },
}));

const Difficult = () => {
  const classes = style();
  const options = ["any", "easy", "medium", "hard"];
  const dispatch = useDispatch();
  const currentQuestion = useSelector((state) => state.currentQuestion);

  const handleChange = (e) => {
    dispatch(changeDifficulty(e.target.value));
  };

  return (
    <Box className={classes.inputBox}>
      <Box
        sx={{
          width: "50%",
          textAlign: "right",
          pr: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h6">Difficulty</Typography>
      </Box>

      <Box sx={{ width: "50%" }}>
        <FormControl sx={{ minWidth: "100px" }} size="small">
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentQuestion.difficulty}
            label="Difficulty"
            onChange={handleChange}
          >
            {options.map((option, index) => (
              <MenuItem value={option} key={index}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Difficult;
