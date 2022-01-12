import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
// import useFirebase from "./../../hooks/useFirebase";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const [logInData, setLogInData] = useState({});
  console.log(logInData);

  const location = useLocation();
  const history = useHistory();

  const { handleGoogleLogin, handleUserLogin } = useAuth();

  const { register, handleSubmit, watch, errors } = useForm();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...logInData };
    newLogInData[field] = value;

    setLogInData(newLogInData);
    console.log(newLogInData);
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();
  };
  const onSubmit = (data) => {
    console.log(data);
    handleUserLogin(data.email, data.password, location, history);
    console.log(handleUserLogin);
  };

  const redirect_uri = location.state?.from || '/';

  const handleGoogleLoginPopup = () => {
    handleGoogleLogin().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <div className="row">
        <div className="login-form mb-5 formControl col-md-6 border border-5">
          <h2>Please Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field "
              name="email"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <br />
            <input
              className="input-field"
              name="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <br />

            <input
              className="submit-btn btn btn-danger mt-3"
              type="submit"
              value="Log In"
            />
          </form>
          <button onClick={handleGoogleLoginPopup} className="btn mt-5">
            <i class="fab fa-google-plus-g fscolor"></i> Sign-In With Google{" "}
          </button>
          <p className="mt-5">
            New Here? <Link to="/register">Create Account</Link>
          </p>
        </div>
        <div className="col-md-6 border border-5"></div>
      </div>
    </div>
  );
};

export default Login;
