import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {delBookCreator} from '../redux/actions/book';

import '../assets/css/detail-page.css';
import Header from '../components/detail/header';
import ModalEdit from "../components/detail/modalEdit";

import back from '../assets/images/back.png';
import Content from '../components/detail/content';
import ModalDel from '../components/detail/modalDel';

class DetailPage extends React.Component {
    render() {
        return (
            <>      {console.log(this.props.history)}
                <ModalEdit />
                <ModalDel />
                <div className="detail-page">
                    <nav className="nav p-1">
                        <div className="round">

                            <Link to="/"><img alt="back" src={back} /></Link>
                        </div>
                        <div className="d-flex">
                            <button className="nav-link edit" data-target="#modal-edit" data-toggle="modal"><span className="font-weight-bold">Edit</span></button>
                            <button className="nav-link" data-target="#modal-delete" data-toggle="modal" onClick={() => {

                                this.props.delBookCreator(this.props.book.bookDetail.id);
                                this.props.history.push('/');
                            }}><span className="font-weight-bold">Delete</span></button>
                        </div>
                    </nav>
                    <Header />
                    <div className="content">
                        <Content/>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const {book} = state;
    return {
        book
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        delBookCreator: (id) => {
            dispatch(delBookCreator(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);