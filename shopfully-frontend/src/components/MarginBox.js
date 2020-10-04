import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    margin: 4,
  },
});

const MarginBox = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.root}>{children}</Box>;
};

MarginBox.propTypes = {
  children: PropTypes.node,
};

export default MarginBox;
