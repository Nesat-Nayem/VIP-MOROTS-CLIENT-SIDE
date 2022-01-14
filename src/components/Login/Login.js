import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const [logInData, setLogInData] = useState({});
  console.log(logInData);

  const location = useLocation();
  const history = useHistory();

  const { handleGoogleLogin, newHandleFacebookLogin, handleUserLogin } =
    useAuth();

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

  const redirect_uri = location.state?.from || "/";

  const handleGoogleLoginPopup = () => {
    handleGoogleLogin().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleFacebookLoginPopup = () => {
    newHandleFacebookLogin();
  };

  return (
    <div>
      <div className="">
        <div className="login-form mb-5 formControl">
          <h2>Please Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="p-2 m-2 w-25 input-field"
              name="email"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <br />
            <input
              className="p-2 m-2 w-25 input-field"
              name="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <br />

            <input
              className="submit-btn costomButton"
              type="submit"
              value="Log In"
            />
          </form>

          <h6 className="mt-5">****** ALSO YOU CAN LOGIN ******</h6>

          <button className="btn mt-5 btnStyle " onClick={handleGoogleLoginPopup} >

            <i class="fab fa-google-plus-g fscolor me-1"></i>
            
             Sign-In With Google
          </button>

          <button onClick={handleFacebookLoginPopup} className="btn mt-5 btnStyle ">
            <i class="fab fa-facebook fscolor"></i> Sign-In With Facebook
          </button>

          <p className="mt-5">
            New Here? <Link to="/register">Create Account</Link>
          </p>
        </div>
        {/* <div className="col-md-6">
          <img className="img-fluid" src="https://i.ibb.co/rQThyv8/slider1.jpg" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
