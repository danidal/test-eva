import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const useStyles = makeStyles({
  favorite: {
    padding: 0,
    color: "grey",
  },
});

const FavoriteController = ({ id, title, isFavorite, setIsFavorite }) => {
  const classes = useStyles();
  const handleClick = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    if (isFavorite) {
      localStorage.setItem('favs', JSON.stringify(favs.filter(fav => id !== fav.id )));
      setIsFavorite(false)
    } else {
      localStorage.setItem('favs', JSON.stringify([...favs, { id, title }]));
      setIsFavorite(true)
    }
  }

  return (
    <IconButton
      className={classes.favorite}
      onClick={handleClick}
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
    </IconButton>
  );
};

FavoriteController.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  isFavorite: PropTypes.bool,
  setIsFavorite: PropTypes.func.isRequired,
};

export default FavoriteController;
