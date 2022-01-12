import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";

import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import { useNavigate } from "react-router-dom";
import { updateWatchTime } from "../../service/Reducers/AllQuesReducer";
import Navbar from "../Navbar/Navbar";
import { updateTotalTime } from "../../service/Reducers/CurrentQuestion";
import MessagePage from "../Messages/MessagePage";

const drawerWidth = 240;
const drawerWidthMd = 360;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    [theme.breakpoints.down("md")]: {
      marginLeft: `-${drawerWidth}px`,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: `-${drawerWidthMd}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    },
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function QuizPage() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const { index, totalTime, status } = useSelector((state) => state.currentQuestion);
  const allQuestion = useSelector((state) => state.allQuestion);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const timer = () => dispatch(updateWatchTime(index));
  const totalTimer = () => {
    dispatch(updateTotalTime());
    allQuestion.length * 60 - totalTime < 590 && setShowWarning(true);
    totalTime >= allQuestion.length * 60 && navigate("/result");
  };

  

  useEffect(() => {
    console.log(status)
    status !== "started" && navigate("/");
  }, [status,totalTime]);

  useEffect(() => {
    if (allQuestion.length === 0) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const id = setInterval(totalTimer, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <Box sx={{ display: "flex" }}>
      <MessagePage
        show={showWarning}
        setShow={setShowWarning}
        message={"Hurry !! Only 30 second left.."}
        type={"warning"}
      />
      <CssBaseline />

      <Navbar open={open} setOpen={setOpen} />

      <Drawer
        sx={{
          width: {
            xs: drawerWidth,
            md: drawerWidthMd,
          },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {
              xs: drawerWidth,
              md: drawerWidthMd,
            },
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <LeftBar />
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <RightBar />
      </Main>
    </Box>
  );
}
