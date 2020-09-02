import React from "react";
import style from "../pages/login.module.css";
// import logoLib from "../assets/images/liblogo.png";

const Regist = (props) => {
  console.log({ ...props });
  return (
    <div className={style.regcontainer}>
      <div className={style.reghead}>
        <h1>Register</h1>
        <p>Welcome Back, Please Register to create account</p>
      </div>
      <form className={style.reginput}>
        <div className={style.line}>
          <p>Username</p>
          <input className={style.username} type="text" />
        </div>
        <div className={style.line}>
          <p>Fullname</p>
          <input className={style.fullname} type="text" />
        </div>
        <div className={style.line}>
          <p>Email</p>
          <input className={style.email} type="text" />
        </div>
        <div className={style.line}>
          <p>Profile Image</p>
          <input className={style.email} type="file" style={{fontSize:"12px"}}/>
        </div>
        <div className={style.linepassword}>
          <p>Password</p>
          <input className={style.pass} type="password" />
        </div>
        <hr/>
        {/* <div className={style.linecheckbox}>
          <div ><input type="checkbox"/>Remember me</div>
          <div><p>Forgot Password</p></div>
        </div> */}
        <div className={style.linebutton}>
          <button className={style.buttonlogin} type='submit'>Sign up</button>
          <button className={style.buttonsignup} type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Regist;
