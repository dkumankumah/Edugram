/**
 The landing and login page
 @author @Danny Nansink, 500821004
 **/
import React from "react";

// component imports
import Layout from "../components/frontpageLayout";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero/>
      <Layout />
    </>
  );
};

export default Home;
