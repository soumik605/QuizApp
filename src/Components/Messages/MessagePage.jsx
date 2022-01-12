import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessagePage = ({show, setShow, message, type }) => {

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShow(false);
  };


  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessagePage;
