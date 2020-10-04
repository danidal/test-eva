/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import LazyCard from "./LazyCard";
import Loader from "./Loader";

const PresentationalFlyersContainer = ({ flyers, isFetching, endOfFlyers }) => (
  <Grid container>
    {flyers.map(({ id, title, category, retailer, favorite, image }) => (
      <Grid item xs={6} md={3} lg={2} key={id}>
        <LazyCard
          id={id}
          title={title}
          category={category}
          retailer={retailer}
          favorite={favorite}
          image={image}
        />
      </Grid>
    ))}
    {!isFetching && !flyers.length && <div>Nothing to show</div>}
    {isFetching && !endOfFlyers && <Loader />}
  </Grid>
);

PresentationalFlyersContainer.propTypes = {
  flyers: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  endOfFlyers: PropTypes.bool,
};

export default PresentationalFlyersContainer;
