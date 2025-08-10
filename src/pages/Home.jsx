import React from "react";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import Review from "../components/Review";
import LatestItems from "../components/LatestItems";
import TipsAndGuidelines from "../components/TipsAndGuidelines ";
import SuccessStories from "../components/SuccessStories";

const Home = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <TipsAndGuidelines></TipsAndGuidelines>
      <SuccessStories></SuccessStories>
      <Review></Review>
    </div>
  );
};

export default Home;
