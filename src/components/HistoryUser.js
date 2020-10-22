import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { historyAPICreator } from "../redux/actions/history";
import { getBorrowBookAPICreator, deleteBorrowBookAPICreator } from "../redux/actions/borrowBooks";
// import coverbook from "../assets/images/coverbook.jpg";
import "../pages/profile.css";

const HistoryUser = (props) => {
  const dispatch = useDispatch();

  const { dataGet } = useSelector((state) => state.borrowBooksAPI);
  const { bookDetail } = useSelector((state) => state.book);
  const { dataLogin } = useSelector((state) => state.authAPI);

  useEffect(() => {
    dispatch(getBorrowBookAPICreator());
  }, [dispatch]);

  const changeQuantityBook=(id)=>{
    let body={
      id,
      books_qty:Number(bookDetail.qty + 1),
    }
    const url = 'http://localhost:2300/books';
      axios.patch(url, body)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }
  const handleDelete=(e)=>{
    e.preventDefault();
    dispatch(deleteBorrowBookAPICreator(e.target.value));
    dispatch(getBorrowBookAPICreator());
    changeQuantityBook(e.target.value)
  }
  return (
    <>
      <div className='headhistoryuser'>
        <h4>Book's List</h4>
      </div>
      <div className='row-history'>
        {dataGet.length === 0 ? (
          <h5>You aren't borrowing any book</h5>
        ) : (
          dataGet
            .filter((item) => {
              return item.user_id === dataLogin.id;
            })
            .map((item, index) => {
              return (
                <div key={index} className='col-book'>
                  <div className='book-item'>
                    <div className='cover'>
                      <img src={item.image} alt='' />
                    </div>
                    <div className='detail'>
                      <div className='title'>
                        <p className='key'>Title</p>
                        <p className='value'>{item.title}</p>
                      </div>
                      <div className='date'>
                        <p className='key'>Date of Borrow</p>
                        <p className='value'>{item.borrow_date.toString().slice(0,10)}</p>
                      </div>
                      <div className='duration'>
                        <p className='key'>Duration</p>
                        <p className='value'>{item.duration}</p>
                      </div>
                    </div>
                    <div className='button'>
                      <button value={item.id} onClick={(e)=>{return handleDelete(e)}}>Kembalikan</button>
                    </div>
                  </div>
                </div>
              );
            })
        )}
        {/* <div className='col-book'>
          <div className='book-item'>
            <div className='cover'>
              <img src={coverbook} alt='' />
            </div>
            <div className='detail'>
              <div className='title'>
                <p className='key'>Title</p>
                <p className='value'>Dilan</p>
              </div>
              <div className='date'>
                <p className='key'>Date of Borrow</p>
                <p className='value'>3 September 2020</p>
              </div>
              <div className='duration'>
                <p className='key'>Duration</p>
                <p className='value'>A week</p>
              </div>
            </div>
            <div className='button'>
              <button>Kembalikan</button>
            </div>
          </div>
        </div>

        <div className='col-book'>
          <div className='book-item'>
            <div className='cover'>
              <img src={coverbook} alt='' />
            </div>
            <div className='detail'>
              <div className='title'>
                <p className='key'>Title</p>
                <p className='value'>Dilan</p>
              </div>
              <div className='date'>
                <p className='key'>Date of Borrow</p>
                <p className='value'>3 September 2020</p>
              </div>
              <div className='duration'>
                <p className='key'>Duration</p>
                <p className='value'>A week</p>
              </div>
            </div>
            <div className='button'>
              <button>Kembalikan</button>
            </div>
          </div>
        </div>

        <div className='col-book'>
          <div className='book-item'>
            <div className='cover'>
              <img src={coverbook} alt='' />
            </div>
            <div className='detail'>
              <div className='title'>
                <p className='key'>Title</p>
                <p className='value'>Dilan</p>
              </div>
              <div className='date'>
                <p className='key'>Date of Borrow</p>
                <p className='value'>3 September 2020</p>
              </div>
              <div className='duration'>
                <p className='key'>Duration</p>
                <p className='value'>A week</p>
              </div>
            </div>
            <div className='button'>
              <button>Kembalikan</button>
            </div>
          </div>
        </div>

        <div className='col-book'>
          <div className='book-item'>
            <div className='cover'>
              <img src={coverbook} alt='' />
            </div>
            <div className='detail'>
              <div className='title'>
                <p className='key'>Title</p>
                <p className='value'>Dilan</p>
              </div>
              <div className='date'>
                <p className='key'>Date of Borrow</p>
                <p className='value'>3 September 2020</p>
              </div>
              <div className='duration'>
                <p className='key'>Duration</p>
                <p className='value'>A week</p>
              </div>
            </div>
            <div className='button'>
              <button>Kembalikan</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HistoryUser;
