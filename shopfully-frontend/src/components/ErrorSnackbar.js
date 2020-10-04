import React from "react";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const ErrorSnackbar = ({ open = false, setOpen }) => (
  <Snackbar
    open={open}
    autoHideDuration={1000}
    onClose={() => setOpen(false)}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <Alert severity="error">
      Error in loading data
    </Alert>
  </Snackbar>
);

ErrorSnackbar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
};

export default ErrorSnackbar;
