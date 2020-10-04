import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/CardContent";
import MarginBox from "./MarginBox";
import FavoriteController from "./FavoriteController";

const useStyles = makeStyles({
  media: {
    height: 200,
    backgroundSize: "contain",
  },
  content: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: "16px !important",
  },
  retailer: {
    padding: 0,
    fontSize: "0.8em",
  },
  title: {
    padding: 0,
    marginTop: 8,
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: "1.2em",
  },
  category: {
    padding: 0,
    marginBottom: 8,
    color: "grey",
    fontSize: "0.8em",
  },
});

const FlyerCard = ({ id, title, retailer, category, favorite, image }) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(favorite);

  return (
    <MarginBox>
      <Card>
        <CardMedia
          className={classes.media}
          image={image}
          title="Flyer"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.retailer} variant="subtitle1">
            {retailer.toUpperCase()}
          </Typography>
          <Typography className={classes.title} variant="body1">
            {title}
          </Typography>
          <Typography className={classes.category} variant="subtitle2">
            {category}
          </Typography>
          <FavoriteController
            id={id}
            title={title}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
          />
        </CardContent>
      </Card>
    </MarginBox>
  );
};

FlyerCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  retailer: PropTypes.string,
  category: PropTypes.string,
  favorite: PropTypes.bool,
  image: PropTypes.string,
};

export default FlyerCard;
