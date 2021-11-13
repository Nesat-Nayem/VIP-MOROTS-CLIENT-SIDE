import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "./../../hooks/useFirebase";

const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email")}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Your Comments"
          {...register("comments")}
        />
        <br />

        <input
          className="input-field"
          name="img"
          placeholder="Your Image"
          {...register("img")}
        />
        <br />
        <input
          className="input-field"
          name="position"
          placeholder="Your Position"
          {...register("Position")}
        />
        <br />
        <input
          className="input-field"
          name="Star"
          placeholder="Rating"
          {...register("Star")}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
};

export default Review;
