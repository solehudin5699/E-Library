import React from "react";
import style from "./login.module.css";
import logoLib from "../assets/images/liblogo.png";
// import Login from "../components/Login";
import Regist from "../components/Regist"

const Signup = (props) => {
  console.log({ ...props });
  return (
    <div className={style.container}>
      <div className={style.content}>

        <div className={style.bcgimage}>
          <div className={style.title}>
            <h1>Book is a window to the world</h1>
          </div>
          <div className={style.logregcontentres}>
            <Regist colorLoading="white"/>
          </div>
        </div>

        <div className={style.logreg}>
          <div className={style.logreghead}>
            <img src={logoLib} alt='' />
          </div>
          <div className={style.logregcontent}>
            <Regist colorLoading="green"/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
