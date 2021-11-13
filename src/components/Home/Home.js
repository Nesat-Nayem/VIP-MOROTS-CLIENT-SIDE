import React from "react";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";
import ShowReview from "../ShowReview/ShowReview";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Blog></Blog>
      <ShowReview></ShowReview>
      
    </div>
  );
};

export default Home;
