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

  
  const style = makeStyles((theme) => ({
    inputBox: {
      alignItems: "center",
      marginBottom: theme.spacing(1),
      display: "flex",
      justifyContent:"center"

    },
  }));

const Tags = () => {
    const classes = style();

    return (
        <Box className={classes.inputBox}>
          <Typography variant="h6">Select A Catagory</Typography>
          <FormControl sx={{ minWidth: "100px", ml: 2 }} size="small">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={20}
              label="Age"
              //onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
    )
}

export default Tags
