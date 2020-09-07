import React from 'react';

import {connect} from 'react-redux';
import {clickLeftBarCreator, clickNavcreator} from '../redux/actions/animate';
import {searchBookCreator} from '../redux/actions/book';


import Liblogo from "../assets/images/liblogo.png";
import glass from "../assets/images/glass.png";
import menu from '../assets/images/menu.png';
import "../index.css";
import arrow from '../assets/images/arrow.png';



const Header = (props) => {
    let years = []
    const date = new Date();
    let year = date.getFullYear();
    for(let i = 2005; i <= year; i++){
        years.push(i)
    }
  

    return (
        <>
            {/* c{console.log(years)} */}
            <ul className={!props.animate.navDisplay ? 'nav header nav-pills d-flex justify-content-between shadow p-2 fixed-top'
                : 'nav header nav-pills d-flex justify-content-between p-2 fixed-top'}>
                <li className='nav-item menu ml-2 ' onClick={() => props.clickLeftBarCreator()}>
                    <img src={menu} alt="menu"></img>
                </li>
                <div className='drop ml-5'>
                    <select className="" id="">
                        <option>All Categories</option>
                        <option>Comic</option>
                        <option>History</option>
                        <option>Novel</option>
                        <option>Religion</option>
                        <option>Scientific</option>
                    </select>
                    <select className="right" id="">
                        <option>All Times</option>
                        {years.map((year) =>{
                            return(
                                <option key={year}>{year}</option>
                            )
                        })}
                    </select>

                </div>
                <div className='input search'>
                    <img src={glass} alt='logo' />
                    <input className='form-control' type='text' placeholder='search' onKeyPress={(event) => {
                        if(event.key === 'Enter') {
                            props.searchBookCreator(event.target.value);
                        }
                    }} />
                </div>
                <li className='nav-item arrow' onClick={() => props.clickNavcreator()}>
                    <img src={arrow} alt='logo' />
                </li>
                <div className='logo'>
                    <li className='nav-item' >
                        <button
                            className='nav-link lib'
                            href='home'
                            tabIndex='-1'
                            aria-disabled='true'
                        >
                            <img src={Liblogo} alt='logo' />
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button
                            className='nav-link lib'
                        >
                            Library
                    </button>
                    </li>
                </div>
            </ul>
        </>
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
        clickNavcreator: () => {
            dispatch(clickNavcreator());
        },
        clickLeftBarCreator: () => {
            dispatch(clickLeftBarCreator());
        },
        searchBookCreator: (title) => {
            dispatch(searchBookCreator(title));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);