import React, {useEffect} from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector } from "react-redux";
import {
  getBookCreator,
  addDetailCreator,
  PageCreator,
} from "../redux/actions/book";

import next from "../assets/images/next.png";
import prev from "../assets/images/prev.png";
import spinner from "../assets/images/Spinner.gif";
import empty from "../assets/images/bookEmpty.jpg";

const ListBook = (history) => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  console.log(book.data)

  useEffect(() => {
    dispatch(getBookCreator())
  }, [])

    return (
      <>
        <div className='row'>
          <div
            className='col-12 title'
            onClick={() => dispatch(getBookCreator())}
          >
            <h3 className='mb-4'>List Book</h3>
          </div>
        </div>
        <div className='row'>
            {book.isfulfilled === true ? (
              book.data !== undefined || book.data.length ? (
                book.data.length === 0 ? (
                  <div
                    className='row spinner empty'
                    onClick={() => dispatch(getBookCreator())}
                  >
                    <div className='col-12 mt-5'>
                      <img src={empty} alt='spinner' />
                    </div>
                  </div>
                ) : (  
                  book.data.map((item, index) => {
                    return (
                      <div
                        className='col-6 col-md-3 item'
                        key={index}
                      >
                      <Link to='/detail' style={{
                        textDecoration: 'none', color: 'inherit'
                      }}>
                        <div className='card shadow'>
                            <img
                              src={item.image}
                              className='card-img-top'
                              alt='...'
                              onClick={() => {
                                dispatch(addDetailCreator(
                                  item.id,
                                  item.title,
                                  item.genre,
                                  item.image,
                                  item.release_year,
                                  item.synopsis,
                                  item.author,
                                  item.books_qty,
                                  item.genre_id,
                                ))
                              }
                              }
                            />
                          <div className='card-body p-3'>
                            <p className='bt text-center'>{item.title}</p>
                            <p className='card-text synop'>
                              {item.synopsis.split('').length > 50 ?  item.synopsis.substring(0, 45) +
                                "....continue" : item.synopsis}
                            </p>
                          </div>
                        </div>
                        </Link>
                      </div>
                    );
                  })
                )
              ) : (
                <div
                  className='row spinner empty'
                  onClick={() => dispatch(getBookCreator())}
                >
                  <div className='col-12'>
                    <p>Kosong</p>
                  </div>
                </div>
              )
            ) : (
              <div className='row spinner'>
                <div className='col-12'>
                  <img src={spinner} alt='spinner' />
                </div>
              </div>
            )}
        </div>
{ book.data !== undefined ? <div className='row pagination'>
          <div className='col-12 mt-5'>
            <nav aria-label='Page navigation example '>
              <ul className='pagination pagination-lg'>
                <li className='page-item'>
                  {book.pageInfo === undefined ? (
                    <button
                      className='page-link '
                      aria-label='Previous'
                      disabled
                    >
                      <img src={prev} alt='prev'></img>
                      <img src={prev} alt='next'></img>
                    </button>
                  ) : book.pageInfo.prevPage === "" ? (
                    <button
                      className='page-link '
                      aria-label='Previous'
                      disabled
                    >
                      <img src={prev} alt='prev'></img>
                      <img src={prev} alt='next'></img>
                    </button>
                  ) : (
                    <button
                      className='page-link '
                      aria-label='Previous'
                      onClick={() =>
                        dispatch(PageCreator(
                          book.pageInfo.prevPage,
                        ))
                      }
                    >
                      <img src={prev} alt='next'></img>
                      <img src={prev} alt='next'></img>
                    </button>
                  )}
                </li>
                <li className='page-item'>
                  {book.pageInfo === undefined ? (
                    <button
                      className='page-link '
                      aria-label='Previous'
                      disabled
                    >
                      <img src={next} alt='prev'></img>
                      <img src={next} alt='next'></img>
                    </button>
                  ) : book.pageInfo.nextPage === "" ? (
                    <button
                      className='page-link '
                      aria-label='Previous'
                      disabled
                    >
                      <img src={next} alt='prev'></img>
                      <img src={next} alt='next'></img>
                    </button>
                  ) : (
                    <button
                      className='page-link '
                      aria-label='Previous'
                      onClick={() =>
                        dispatch(PageCreator(
                          book.pageInfo.nextPage,
                        ))
                      }
                    >
                      <img src={next} alt='next'></img>
                      <img src={next} alt='next'></img>
                    </button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div> : null}
      </>
    );
 }


export default ListBook;
