/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import debounce from "../utils/debounce";
import getRandomImage from "../utils/getRandomImage";
import PresentationalFlyersContainer from "./PresentationalFlyersContainer";
import ErrorSnackbar from "./ErrorSnackbar";

const FlyersContainer = () => {
  const [flyers, setFlyers] = useState([]);
  const [firstFetching, setFirstFetching] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [endOfFlyers, setEndOfFlyers] = useState(false);
  const [errorShown, setErrorShown] = useState(false);
  const [page, setPage] = useState(1);

  const LIMIT = 100;

  useEffect(() => {
    fetchFirstFlyers();
    window.addEventListener("scroll", debounce(handleScroll, 500));
  }, []);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  const fetchData = async (setLoading = () => {}) => {
    try {
      const response = await fetch(
        `https://cf1bdok2xj.execute-api.us-east-1.amazonaws.com/dev/flyers?page=${page}&limit=${LIMIT}`,
        { mode: "cors" }
      );

      const { flyers: newFlyers = [] } = await response.json();
      const favs = JSON.parse(localStorage.getItem("favs")) || [];
      const newFlyersWithFav = newFlyers
        .filter((flyer) => flyer.is_published)
        .map((flyer) => ({
          ...flyer,
          favorite: favs.some(({ id }) => id === flyer.id),
          image: getRandomImage(),
        }));
      setPage(page + 1);
      setFlyers((prevFlyers) => [...prevFlyers, ...newFlyersWithFav]);
      if (newFlyers.length < LIMIT) {
        setEndOfFlyers(true);
      }
      setLoading(false);
    } catch (e) {
      setErrorShown(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreFlyers();
  }, [isFetching]);

  const fetchFirstFlyers = () => {
    fetchData(setFirstFetching);
  };

  const fetchMoreFlyers = () => {
    if (!endOfFlyers) {
      fetchData(setIsFetching);
    }
  };

  return (
    <>
      <PresentationalFlyersContainer
        flyers={flyers}
        isFetching={isFetching || firstFetching}
        endOfFlyers={endOfFlyers}
      />
      <ErrorSnackbar open={errorShown} setOpen={setErrorShown} />
    </>
  );
};

export default FlyersContainer;
