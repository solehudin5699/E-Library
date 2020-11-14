import React from 'react';
import cheked from '../../assets/images/checked.png';
import {connect, useDispatch} from 'react-redux';
import {getBookCreator} from '../../redux/actions/book'

const ModalDel = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="modal fade delete" tabIndex="-1" id="modal-delete">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <button onClick={() => 
                        {
                         props.history.push('/')
                        dispatch(getBookCreator())}} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={cheked} alt="checked"></img>
                        <p>Data <span className="font-weight-bold">{props.book.bookDetail.title}</span> berhasil dihapus!</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) =>{
    const {book} = state;
    return{
        book
    }
}
export default connect(mapStateToProps,null)(ModalDel);