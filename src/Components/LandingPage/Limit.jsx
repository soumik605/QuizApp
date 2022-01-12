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
import { changeLimit } from "../../service/Reducers/CurrentQuestion";
import { useDispatch, useSelector } from "react-redux";

const style = makeStyles((theme) => ({
  inputBox: {
    alignItems: "center",
    display: "flex",
    marginBottom: theme.spacing(1),
    justifyContent: "center",
  },
}));

const Limit = () => {
  const classes = style();
  const dispatch = useDispatch();
  const currentQuestion = useSelector((state) => state.currentQuestion);

  const options = [10, 15, 20, 25, 30];

  const handleChange = (e) => {
    dispatch(changeLimit(e.target.value));
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
        <Typography variant="h6">Total Question</Typography>
      </Box>

      <Box sx={{ width: "50%" }}>
        <FormControl sx={{ minWidth: "100px"}} size="small">
          <InputLabel id="demo-simple-select-label">Limit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentQuestion.limit}
            label="Limit"
            onChange={handleChange}
          >
            {options.map((option, index) => (
              <MenuItem value={option} key={index}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Limit;
