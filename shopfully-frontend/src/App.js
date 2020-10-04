import React from "react";
import useStorage from "./hooks/useStorage";
import TopBar from "./components/TopBar";
import FlyersContainer from "./components/FlyersContainer";

const App = () => {
  const localStorageAvailable = useStorage("localStorage");
  // TODO: if !localStorageAvailable, make use of cookies.

  return (
    <>
      <TopBar />
      <FlyersContainer />
    </>
  );
};

export default App;
