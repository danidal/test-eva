/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  closeButton: {
    margin: 8,
    width: 48,
    height: 48,
  },
  title: {
    fontSize: "1.4em",
    fontWeight: "bold",
    padding: "8px 16px",
  },
  subtitle: {
    padding: "0 16px 8px 16px",
  },
});

const AppMenu = ({ open, setOpen }) => {
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (open) {
      const favs = JSON.parse(localStorage.getItem("favs")) || [];
      setFavorites(favs);
    }
  }, [open]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (
    <div className={classes.list} role="presentation">
      <List>
        {favorites.map(({ id, title }) => (
          <ListItem button key={id}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <IconButton
        edge="start"
        className={classes.closeButton}
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
      <Typography className={classes.title} variant="h4">
        Favourites
      </Typography>
      <Typography className={classes.subtitle} variant="body1">
        The list of your preferred flyers
      </Typography>
      <Divider />
      {list}
    </Drawer>
  );
};

AppMenu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
};

export default AppMenu;
