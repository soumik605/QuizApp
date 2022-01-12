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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeCatagory } from "../../service/Reducers/CurrentQuestion";

const style = makeStyles((theme) => ({
  inputBox: {
    alignItems: "center",
    display: "flex",
    marginBottom: theme.spacing(1),
    justifyContent: "center",
  },
}));

const Category = () => {
  const classes = style();
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const dispatch = useDispatch();

  const Options = [
    { id: 0, value: "Any" },
    { id: 9, value: "General Knowledge" },
    { id: 10, value: "Book " },
    { id: 11, value: "Film" },
    { id: 12, value: "Music" },
    { id: 13, value: "Musical & Theaters" },
    { id: 14, value: "Television" },
    { id: 15, value: "Video Games" },
    { id: 16, value: "Board Games" },
    { id: 17, value: "Science & Nature" },
    { id: 18, value: "Computer" },
    { id: 19, value: "Mathematics" },
    { id: 20, value: "Mythology" },
    { id: 21, value: "Sports" },
    { id: 22, value: "Geography" },
    { id: 23, value: "History" },
    { id: 24, value: "Politics" },
    { id: 25, value: "Art" },
    { id: 26, value: "Celebrites" },
    { id: 27, value: "Animal" },
    { id: 28, value: "Vehicles" },
    { id: 29, value: "Comics" },
    { id: 30, value: "Gatgets" },
    { id: 31, value: "Japanese" },
    { id: 32, value: "Cartoon Animation" },
  ];

  const handleChange = (e) => {
    dispatch(changeCatagory(e.target.value));
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
        <Typography variant="h6">Category</Typography>
      </Box>

      <Box sx={{ width: "50%" }}>
        <FormControl sx={{ minWidth: "100px"}} size="small">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentQuestion.category}
            label="Category"
            onChange={(e) => handleChange(e)}
          >
            {Options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Category;
