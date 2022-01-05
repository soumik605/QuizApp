import React, { useState, useEffect } from "react";
import { alpha } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Mail from "@mui/icons-material/Mail";
import Search from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

const index = () => {
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        <Typography variant="h4" className="logoLg" className={classes.logoLg}>
          Logo Text
        </Typography>
        <Typography variant="h5" className="logoSm" className={classes.logoSm}>
          Logo
        </Typography>

        <Avatar alt="Remy Sharp" src="" />
      </Toolbar>
    </AppBar>
  );
};

export default index;
