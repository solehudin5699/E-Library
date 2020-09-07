import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
// import userprofile from "../assets/images/userprofile.png";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import HistoryUser from "../components/HistoryUser";
import HistoryAdmin from "../components/HistoryAdmin";
import "./profile.css";

const Profile = (props) => {
  const {dataLogin} = useSelector(state => state.authAPI)
  return (
    <div className='con-profilea'>
      <div className='backtohome'>
        <Link to="/"><ArrowLeftCircle size={60} color='royalblue' /></Link>
        
      </div>
      <div className='row-head'>
        <div className='col-user'>
          <img src={dataLogin.avatar} alt=''></img>
          <h5>Solehudin</h5>
          <div className='contactme'>
            <p>{dataLogin.email}</p>
          </div>
        </div>
        <div className='col-about'></div>
      </div>
      {dataLogin.level_id===1 ? <HistoryAdmin /> : <HistoryUser />}
    </div>
  );
};

export default Profile;
