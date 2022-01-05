import { Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Category from "./Category";
import Difficult from "./Difficult";
import Tags from "./Tags";
import Limit from "./Limit";
import { useNavigate } from "react-router-dom";

const style = makeStyles((theme) => ({
  inputCont: {
    padding: theme.spacing(1),
    width: "fit-content",
    margin: "20vh auto 0",
    justifyContent: "center",
  },
}));

const Landing = () => {
  const classes = style();
  const navigate = useNavigate();

  return (
    <Container>
      <Box className={classes.inputCont}>
        <Category />
        <Difficult />
        <Limit />
        <Tags />
        <Box display="flex">
          <Button
            variant="contained"
            color="success"
            sx={{ m: 1 }}
            onClick={() => navigate("/quiz")}
          >
            Start
          </Button>
          <Button variant="contained" sx={{ m: 1 }}>
            Reset
          </Button>
          <Button variant="contained" color="warning" sx={{ m: 1 }}>
            Random Quiz
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
