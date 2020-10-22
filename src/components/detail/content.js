import React from "react";
import {Link} from 'react-router-dom';
import "../../assets/css/detail-page.css";
import {connect} from 'react-redux';
import {postBorrowBookAPICreator} from "../../redux/actions/borrowBooks";
import {postHistoryAPICreator} from "../../redux/actions/history";
import Axios from 'axios';

class Content extends React.Component {
    state = {
        id: this.props.book.bookDetail.id,
        title: this.props.book.bookDetail.title,
        author: this.props.book.bookDetail.author,
        synopsis: this.props.book.bookDetail.synopsis,
        release_year: this.props.book.bookDetail.realease_year,
        genre_id: this.props.book.bookDetail.genre_id,
        books_qty: this.props.book.bookDetail.qty,
        image: this.props.book.bookDetail.image,

    };

    handleSubmit = (id) => {
        if(this.props.book.bookDetail.qty > 0) {
            console.log(this.props.book.bookDetail.qty);
            let quantityNew = Number(this.props.book.bookDetail.qty - 1);
            let formData = new FormData();
            formData.append('id', id);
            formData.append('title', this.state.title);
            formData.append('author', this.state.author);
            formData.append('synopsis', this.state.synopsis);
            formData.append('release_year', this.state.release_year);
            formData.append('genre_id', this.state.genre_id);
            formData.append('books_qty', quantityNew);
            formData.append('image', this.state.image);

            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };

            const url = 'http://localhost:2300/books';
            Axios.patch(url, formData, config)
                .then((res) => {

                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
        }
    
        const ex= new Date();
        const date = ex.getDate();
        const month = ex.getMonth();
        const year = ex.getFullYear();
        const full = `${date}-${month}-${year}`
        let bodyHistory={
            books_id:id,
            borrow_date: Number(full),
            duration:7,
            users_id:Number(this.props.authAPI.dataLogin.id)
        }
        let bodyBorrow={
            books_id:id,
            borrow_date: Number(full),
            duration:7,
            user_id:Number(this.props.authAPI.dataLogin.id)
        }
        this.props.postBorrowAPI(bodyBorrow);
        this.props.postHistoryAPI(bodyHistory)
    };
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-12 main">
                        <div className="row mb-5 top-desc">
                            <div className="col-sm-6 book-title">
                                <button type="button" className="btn category btn-warning">{this.props.book.bookDetail.genre}</button>
                                <h2>{this.props.book.bookDetail.title}</h2>
                                <p>{this.props.book.bookDetail.realease_year}</p>
                            </div>
                            <div className="col-sm-6 status">
                                {this.props.book.bookDetail.qty > 0 ?
                                    <h5>Avaliable</h5> : <h5 className="not-avail">Not available</h5>}
                            </div>
                        </div>
                        <div className="row description">
                            <div className="col-sm-8">
                                <p className="text-break">{this.props.book.bookDetail.synopsis}</p>
                            </div>
                            <div className="col-sm-4 borrow">
                                {this.props.book.bookDetail.qty > 0 ? <Link to="/">
                                    <button type="button" className="btn btn-warning" onClick={() => {
                                        this.handleSubmit(this.props.book.bookDetail.id);
                                        // this.props.history.push('/')
                                    }}>Borrow</button>
                                </Link>
                                    : <button type="button" className="btn btn-warning" disabled>Borrow</button>}
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }

};

const mapStateToProps = (state) => {
    const {book, authAPI} = state;
    return {
        book, authAPI
    };
};
const mapDispatchToProps = (dispacth) => {
    return {
        postHistoryAPI: (body) => {
            dispacth(postHistoryAPICreator(body));
        },
        postBorrowAPI: (body) => {
            dispacth(postBorrowBookAPICreator(body));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);