import React from 'react';
import "../../assets/css/detail-page.css";
import { connect } from "react-redux";

const Header = (props) => {
    return (
        <>
            <div className="header-detail">
                <img src={process.env.REACT_APP_API_URL+props.book.bookDetail.image}alt="avenger"></img>
            </div>
            <div className="picture shadow">
            <img src={process.env.REACT_APP_API_URL+props.book.bookDetail.image}alt="header"></img>
            </div>
        </>
    );
};
const mapStateToProps = (state) =>{
    const {book} = state;
    return{
        book
    }
}

export default connect(mapStateToProps,null)(Header);