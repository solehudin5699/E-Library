import React from "react";
import style from "./login.module.css";
import logoLib from "../assets/images/liblogo.png";
import Login from "../components/Login";

const Signin = (props) => {
console.log({ ...props });
  return (
    <>
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.bcgimagelogin}>
          <div className={style.title}>
            <h1>Book is a window to the world</h1>
          </div>
          <div className={style.logregcontentres}>
            <Login colorLoading="white"/>
          </div>
        </div>
        <div className={style.logreg}>
          <div className={style.logreghead}>
            <img src={logoLib} alt='' />
          </div>
          <div className={style.logregcontent}>
            <Login colorLoading="green"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signin;
