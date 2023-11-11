import React from "react";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const { setUrl } = useGlobalContext();
  return (
    <>
      <Search setUrl={setUrl} />
      <CountriesList />
    </>
  );
}

export default Home;
