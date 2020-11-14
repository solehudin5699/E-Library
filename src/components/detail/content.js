import React from "react";
import "../../assets/css/detail-page.css";
import {useSelector} from 'react-redux';
import Axios from 'axios';

const Content = ({history}) => {
    const {book} = useSelector((state) => state)

    const handleSubmit = (id) => {
      
        const data = {
            id: id,
            books_qty: book.bookDetail.qty - 1
        }
           
            const url = `${process.env.REACT_APP_API_URL}/books`;
            Axios.patch(url, data)
                .then((res) => {
                    history.push('/')
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
        }
        return (
            <>
                <div className="row">
                    <div className="col-md-12 main">
                        <div className="row mb-5 top-desc">
                            <div className="col-sm-6 book-title">
                                <button type="button" className="btn category btn-warning">{book.bookDetail.genre}</button>
                                <h2>{book.bookDetail.title}</h2>
                                <p>{book.bookDetail.realease_year}</p>
                            </div>
                            <div className="col-sm-6 status">
                                {book.bookDetail.qty > 0 ?
                                    <h5>Avaliable</h5> : <h5 className="not-avail">Not available</h5>}
                            </div>
                        </div>
                        <div className="row description">
                            <div className="col-sm-8">
                                <p className="text-break">{book.bookDetail.synopsis}</p>
                            </div>
                            <div className="col-sm-4 borrow">
                                {book.bookDetail.qty > 0 ?
                                    <button type="button" className="btn btn-warning" onClick={() => {
                                       handleSubmit(book.bookDetail.id);
                                    }}>Borrow</button>
                                    : <button type="button" className="btn btn-warning" disabled>Borrow</button>}
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
  }
                       
export default Content;