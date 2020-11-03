import React from "react";
import {connect, useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {clickLeftBarCreator} from '../redux/actions/animate';
import menu from '../assets/images/menu.png';
// import person from '../assets/images/person.jpg';
import { logoutCreator } from "../redux/actions/auth";


const RightBar = (props) => {
    const {dataLogin} = useSelector(state => state.authAPI)
    const dispatch = useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logoutCreator())
    }
    return (
        <div className={props.animate.leftBarDisplay ? "right-bar shadow show " : "right-bar shadow"}>
            <div className="menu">
                <img src={menu} alt="menu" onClick={props.clickLeftBarCreator}></img>
            </div>
            <div className="pic">
                <img src={process.env.REACT_APP_API_URL+dataLogin.avatar} alt="person"></img>
                <p className="mt-2">{dataLogin.fullname}</p>
            </div>
            <div className="navs">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button>Explore</button>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile">
                        <button>History</button>
                        </Link>
                    </li>
                    <li className="nav-item text-left" data-target="#modal-add" data-toggle="modal" onClick={props.clickLeftBarCreator}>
                        <button>Add Book*</button>
                    </li>
                    <li className="nav-item text-left mt-5" >
                        <button className="logout" onClick={(e)=>{return handleLogout(e)}}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {animate} = state;
    return {
        animate,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clickLeftBarCreator: () => {
            dispatch(clickLeftBarCreator());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(RightBar);