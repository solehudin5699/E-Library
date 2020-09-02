import React from "react";
import style from "./login.module.css";
import logoLib from "../assets/images/liblogo.png";
// import Login from "../components/Login";
import Login from "../components/Login"

const Signin = (props) => {
  console.log({ ...props });
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.bcgimage}>
          <div className={style.title}>
            <h1>Book is a window to the world</h1>
          </div>
          <div className={style.logregcontentres}>
            <Login/>
          </div>
        </div>
        <div className={style.logreg}>
          <img src={logoLib} alt='' />
          <div className={style.logregcontent}>
            <Login/>
          </div>
        </div>
        <div className={style.foot}>
          <p style={{color: "#D0CCCC"}}>By signing up, you agree to Book’s <span style={{color:"black"}}>Terms and Conditions & Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
