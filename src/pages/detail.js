import React from 'react';
import {Link} from 'react-router-dom';
import {connect, useDispatch, useSelector} from 'react-redux';
import {delBookCreator, getBookCreator} from '../redux/actions/book';

import '../assets/css/detail-page.css';
import Header from '../components/detail/header';
import ModalEdit from "../components/detail/modalEdit";

import back from '../assets/images/back.png';
import Content from '../components/detail/content';
import ModalDel from '../components/detail/modalDel';

const DetailPage = (props) => {
    const {book} = useSelector((state) => state)
    const dispatch = useDispatch();


        return (
            <>    
                <ModalEdit />
                <ModalDel props={props}/>
                <div className="detail-page">
                    <nav className="nav p-1">
                        <div className="round">

                            <Link to="/"><img alt="back" src={back} /></Link>
                        </div>
                        <div className="d-flex">
                            <button className="nav-link edit" data-target="#modal-edit" data-toggle="modal"><span className="font-weight-bold">Edit</span></button>
                            <button className="nav-link" data-target="#modal-delete" data-toggle="modal" onClick={() => {

                                dispatch(delBookCreator(book.bookDetail.id));
                                dispatch(getBookCreator())
                                props.history.push('/');
                            }}><span className="font-weight-bold">Delete</span></button>
                        </div>
                    </nav>
                    <Header />
                    <div className="content">
                        <Content history={props.history}/>
                    </div>
                </div>
            </>
        );
    }



export default DetailPage;