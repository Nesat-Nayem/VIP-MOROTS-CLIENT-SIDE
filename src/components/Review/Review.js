import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "./../../hooks/useFirebase";

const Review = () => {
  const { register, handleSubmit, reset, watch, errors } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("https://blooming-forest-81529.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Thanks for your valuable Review");

          reset();
        }
      });
  };
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          placeholder="Name"
          {...register("name")}
        />
        <br />
        <input
          className="input-field"
          name="position"
          placeholder="Position"
          {...register("Position")}
        />

        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments")}
        />
        <br />

        <input
          className="input-field"
          name="img"
          placeholder="Image"
          {...register("img")}
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
