import React from "react";
import style from "./login.module.css";
import logoLib from "../assets/images/liblogo.png";
import Login from "../components/Login"

const Sign = (props) => {
  console.log({ ...props });
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.bcgimage}>hhhh</div>
        <div className={style.logreg}>
          <img src={logoLib} alt='' />
          <div className={style.logregcontent}>
            <Login/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
