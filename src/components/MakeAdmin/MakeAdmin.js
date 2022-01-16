import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit, reset, watch, errors } = useForm();

  const onSubmit = (data) => {
    fetch("https://blooming-forest-81529.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("successfully add admin");

          reset();
        }
        // console.log(result)
      });
    // console.log(data);
  };
  return (
    <div>
      <h1>make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
