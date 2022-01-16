import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "./../../hooks/useFirebase";
import "./Register.css";

const Register = () => {
  const { googleSignIn, handleUserRegister } = useFirebase();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field w-25"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field w-25"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input
          className="submit-btn costomButton mt-3"
          type="submit"
          value="Register"
        />
      </form>

      <p className="mt-5">
        Already Have An Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
