import React, { Suspense } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import FlyerCard from "./FlyerCard";
import MarginBox from "./MarginBox";

const LazyCard = (props) => (
  <Suspense
    fallback={
      <MarginBox>
        <Skeleton variant="rect" height={100} />
        <Skeleton />
        <Skeleton width="60%" />
      </MarginBox>
    }
  >
    <FlyerCard {...props} />
  </Suspense>
);

export default LazyCard;
