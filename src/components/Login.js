import React, { useState, useEffect } from "react";
import { Redirect, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAPICreator } from "../redux/actions/auth";
import style from "../pages/login.module.css";
import Loading from "./Loading";

const Login = (props) => {
  const [formData, updateFormData] = useState({});
  const [login, setLogin] = useState(false);
  const { statusLogin, isLoginPending } = useSelector((state) => state.authAPI);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  useEffect(() => {
    if (login) {
      dispatch(loginAPICreator(formData));
      setLogin(false);
    }
  }, [login, formData, dispatch]);
  // console.log(formData);
  // console.log(props.history);
  return (
    <>
      {statusLogin === 200 ? (
        <Switch>
          <Redirect from='/login' to='/' exact />
        </Switch>
      ) : (
        <div className={style.logincontainer}>
          <div className={style.loghead}>
            <h1>Login</h1>
            {statusLogin === 500 ? (
              <p style={{ color: "red" }}>
                Email or password is wrong, please login again
              </p>
            ) : (
              <p>Welcome Back, Please Login to your account</p>
            )}
          </div>
          {isLoginPending ? <Loading color={props.colorLoading} /> : null}
          <form
            className={style.loginput}
            onSubmit={(e) => {
              return handleSubmit(e);
            }}>
            <div className={style.line}>
              <p>Email</p>
              <input
                className={style.email}
                type='email'
                name='email'
                onChange={(e) => {
                  return handleChange(e);
                }}
                required
              />
            </div>
            <div className={style.linepassword}>
              <p>Password</p>
              <input
                className={style.pass}
                type='password'
                name='password'
                onChange={(e) => {
                  return handleChange(e);
                }}
                required
              />
            </div>
            <hr />
            <div className={style.linecheckbox}>
              <div>
                <input type='checkbox' />
                Remember me
              </div>
              <div>
                <p>Forgot Password</p>
              </div>
            </div>
            <div className={style.linebutton}>
              <button className={style.buttonlogin} type='submit'>
                Login
              </button>
              <Link to='/register'>
                <button className={style.buttonsignup}>Sign up</button>
              </Link>
            </div>
          </form>
          <div className={style.foot}>
            <p>
              <span style={{ color: "#D0CCCC" }}>
                By signing up, you agree to Book’s{" "}
              </span>
              Terms and Conditions & Privacy Policy
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
