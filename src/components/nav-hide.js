import React from "react";
import {connect} from 'react-redux';

const NavHide = (props) => {
    let years = [];
    const date = new Date();
    let year = date.getFullYear();
    for(let i = 2005;i <= year;i++) {
        years.push(i);
    }
    return (
        <div className={props.animate.navDisplay ? 'nav-hide shadow show' : 'nav-hide shadow '}>
            <select className="" id="">
                <option>All Categories</option>
                <option>Comic</option>
                <option>History</option>
                <option>Novel</option>
                <option>Religion</option>
                <option>Scientific</option>
            </select>
            <select className="" id="">
                <option>All Times</option>
                {years.map((year) => {
                    return (
                        <option key={year}>{year}</option>
                    );
                })}
            </select>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {animate} = state;
    return {
        animate,
    };
};

export default connect(mapStateToProps, null)(NavHide);
