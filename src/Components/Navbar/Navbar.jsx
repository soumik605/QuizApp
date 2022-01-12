import React from "react";
import { Toolbar, Typography, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;
const drawerWidthMd = 360;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.down("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
    },
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidthMd}px)`,
      marginLeft: `${drawerWidthMd}px`,
    },

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Text = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "block",
  ...(open && {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  }),
}));

const Navbar = ({ open, setOpen }) => {
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const allQuestion = useSelector((state) => state.allQuestion);

  const toTime = (sec) => {
    var hours = Math.floor(sec / 60 / 60);
    var minutes = Math.floor(sec / 60) - hours * 60;
    var seconds = sec % 60;
    return [hours, minutes, seconds];
  };

  var timestamp = toTime(allQuestion[currentQuestion.index].timeTaken);
  var timeLeft = toTime(allQuestion.length * 60 - currentQuestion.totalTime);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar display="flex" sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Text variant="body" noWrap component="div" open={open}>
            Question No. {currentQuestion.index + 1}
          </Text>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ textAlign: "right" }}>
            Question Time - {timestamp[1]} min {timestamp[2]} sec
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "right" }}>
            Time Left - {timeLeft[1]} min {timeLeft[2]} sec
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
