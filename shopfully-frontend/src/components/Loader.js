import React from "react";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";

const Loader = () => (
  <Box
    position="fixed"
    bottom={20}
    width="100%"
    display="flex"
    justifyContent="center"
  >
    <Fab disabled>
      ...
    </Fab>
  </Box>
);

export default Loader;
