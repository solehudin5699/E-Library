import React from "react";
import style from "../pages/login.module.css";
// import logoLib from "../assets/images/liblogo.png";

const Login = (props) => {
  console.log({ ...props });
  return (
    <div className={style.logincontainer}>
      <div className={style.loghead}>
        <h1>Login</h1>
        <p>Welcome Back, Please Login to your account</p>
      </div>
      <form className={style.loginput}>
        <div className={style.line}>
          <p>Email</p>
          <input className={style.email} type="text" />
        </div>
        <div className={style.linepassword}>
          <p>Password</p>
          <input className={style.pass} type="password" />
        </div>
        <hr/>
        <div className={style.linecheckbox}>
          <div ><input type="checkbox"/>Remember me</div>
          <div><p>Forgot Password</p></div>
          
        </div>
      </form>
    </div>
  );
};

export default Login;
