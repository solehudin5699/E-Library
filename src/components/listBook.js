import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getBookCreator, addDetailCreator, PageCreator} from '../redux/actions/book';

import next from '../assets/images/next.png';
import prev from '../assets/images/prev.png';
import spinner from '../assets/images/Spinner.gif';
import empty from '../assets/images/bookEmpty.jpg'



class ListBook extends React.Component {

    componentDidMount() {
        this.props.getBookCreator();
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12 title" onClick={() => this.props.getBookCreator()}>
                        <h3 className="mb-4">List Book</h3>
                    </div>
                </div>
                <div className="row">
                    {this.props.book.isfulfilled === true ?
                        this.props.book.data !== undefined ?
                            this.props.book.data.map((item) => {
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 item" key={item.id}>
                                        <div className="card shadow">
                                            <Link to="/detail" className="link-to bg-info">
                                                <img src={item.image} className="card-img-top" alt="..." onClick={() => this.props.addDetailCreator(
                                                    item.id,
                                                    item.title,
                                                    item.genre,
                                                    item.image,
                                                    item.release_year,
                                                    item.synopsis,
                                                    item.author,
                                                    item.books_qty,
                                                    item.genre_id
                                                )
                                                } />
                                            </Link>
                                            <div className="card-body p-3">
                                                <p className="bt text-center">{item.title}</p>
                                                <p className="card-text">{item.synopsis.substring(0,45) + "....   CONTINUE"}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }) : <div className="row spinner empty" onClick={() => this.props.getBookCreator()}>
                                <div className="col-12">
                                    <img src={empty} alt="spinner" />
                                </div>
                            </div>
                        : <div className="row spinner">
                            <div className="col-12">
                                <img src={spinner} alt="spinner" />
                            </div>
                        </div>
                    }
                </div>
                <div className="row pagination">
                    <div className="col-12 mt-5">
                        <nav aria-label="Page navigation example ">
                            <ul className="pagination pagination-lg">
                                <li className="page-item">
                                {this.props.book.pageInfo === undefined ?
                                    <button className="page-link " aria-label="Previous" disabled>
                                        <img src={prev} alt="prev"></img>
                                        <img src={prev} alt="next"></img>
                                    </button>
                                    : this.props.book.pageInfo.prevPage === "" ?
                                        <button className="page-link " aria-label="Previous" disabled>
                                            <img src={prev} alt="prev"></img>
                                            <img src={prev} alt="next"></img>
                                        </button>
                                        : <button className="page-link " aria-label="Previous" onClick={() =>
                                            this.props.PageCreator(this.props.book.pageInfo.prevPage)}>
                                            <img src={prev} alt="next"></img>
                                            <img src={prev} alt="next"></img>
                                        </button>
                                }
                                </li>
                                <li className="page-item">
                                    {this.props.book.pageInfo === undefined ?
                                        <button className="page-link " aria-label="Previous" disabled>
                                            <img src={next} alt="prev"></img>
                                            <img src={next} alt="next"></img>
                                        </button>
                                        : this.props.book.pageInfo.nextPage === "" ?
                                            <button className="page-link " aria-label="Previous" disabled>
                                                <img src={next} alt="prev"></img>
                                                <img src={next} alt="next"></img>
                                            </button>
                                            : <button className="page-link " aria-label="Previous" onClick={() =>
                                                this.props.PageCreator(this.props.book.pageInfo.nextPage)}>
                                                <img src={next} alt="next"></img>
                                                <img src={next} alt="next"></img>
                                            </button>
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }

};



const mapStateToProps = (state) => {
    const {book} = state;
    return {
        book
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBookCreator: (book) => {
            dispatch(getBookCreator(book));
        },
        addDetailCreator: (id, title, genre, image, year, synopsis, author, qty, genre_id) => {
            dispatch(addDetailCreator(id, title, genre, image, year, synopsis, author, qty, genre_id));
        },
        PageCreator: (params) => {
            dispatch(PageCreator(params));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ListBook);