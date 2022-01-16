import React, { useEffect, useState } from "react";
import BeautyStars from "beauty-stars";
import "./ShowReview.css";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://blooming-forest-81529.herokuapp.com/myReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);
  return (
    <div>
      <h1>
        Why Clients <span className="color_clint">Love Us</span>
      </h1>
      <div className="reviews">
        <div className="row container">
          {reviews?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="w-50 img_circle" src={pd?.img} alt="" />
                </div>
                <p className="fw-bold mt-3 text-start">{pd?.name}</p>
                <p className="text-start">{pd?.Position}</p>
                <div className="ms-5">
                  <BeautyStars
                    value="5"
                    backgroundColor="red"
                    className="justify-content-center"
                    size="15px"
                    onChange={(value) => value}
                  />
                </div>
                <p>{pd?.comments}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowReview;
