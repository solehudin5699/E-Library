import React, { useState, useEffect } from "react";
import { Redirect, Switch, Link } from "react-router-dom";
import style from "../pages/login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { registrationAPICreator, loginAPICreator } from "../redux/actions/auth";
import Loading from "./Loading";

const Regist = (props) => {
  const { statusRegist, statusLogin, isRegistPending } = useSelector(
    (state) => state.authAPI
  );
  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  // const body = { email, password };

  const handleChangeUsername = (e) => {
    const content = e.target.value;
    setUserName(content);
  };
  const handleChangeFullName = (e) => {
    const content = e.target.value;
    setFullName(content);
  };
  const handleChangeEmail = (e) => {
    const content = e.target.value;
    setEmail(content);
  };
  const handleChangePassword = (e) => {
    const content = e.target.value;
    setPassword(content);
  };
  const handleChangeAvatar = (e) => {
    const content = e.target.files[0];
    setAvatar(content);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("avatar", avatar);
    formData.append("password", password);
    formData.append("level_id", 2);
    dispatch(registrationAPICreator(formData));
  };
  useEffect(() => {
    if (statusRegist === 200) {
      dispatch(loginAPICreator({ email, password }));
    }
  }, [statusRegist, dispatch, email, password]);
  // console.log({ ...props });
  return (
    <>
      {statusLogin === 200 ? (
        <Switch>
          <Redirect exact from='/register' to='/' />
        </Switch>
      ) : (
        <div className={style.regcontainer}>
          <div className={style.reghead}>
            <h1>Register</h1>
            {statusRegist === 500 ? (
              <p style={{ color: "red" }}>
                Failed, probably username is already registered or connection error
              </p>
            ) : (
              <p>Welcome Back, Please Register to create account</p>
            )}
          </div>
          {isRegistPending ? <Loading color={props.colorLoading} /> : null}
          <form
            className={style.reginput}
            onSubmit={(e) => {
              return handleSubmit(e);
            }}>
            <div className={style.line}>
              <p>Username</p>
              <input
                className={style.username}
                type='text'
                name='username'
                onChange={(e) => {
                  return handleChangeUsername(e);
                }}
                placeholder='Maximum username is 12 characters'
                maxLength='12'
                required
              />
            </div>
            <div className={style.line}>
              <p>Fullname</p>
              <input
                className={style.fullname}
                type='text'
                name='fullname'
                onChange={(e) => {
                  return handleChangeFullName(e);
                }}
                required
              />
            </div>
            <div className={style.line}>
              <p>Email</p>
              <input
                className={style.email}
                type='email'
                name='email'
                onChange={(e) => {
                  return handleChangeEmail(e);
                }}
                required
              />
            </div>
            <div className={style.line}>
              <p>Profile Image</p>
              <input
                className={style.email}
                type='file'
                style={{ fontSize: "12px" }}
                name='avatar'
                onChange={(e) => {
                  return handleChangeAvatar(e);
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
                  return handleChangePassword(e);
                }}
                placeholder='Maximum username is 8 characters'
                required
                maxLength='8'
              />
            </div>
            <hr />
            <div className={style.linebutton}>
              <button className={style.buttonlogin} type='submit'>
                Sign up
              </button>
              <Link className={style.linkSignUp} to='/login'>
                <button className={style.buttonsignup}>Login</button>
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

export default Regist;
