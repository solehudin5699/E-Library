import React, { useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getBookCreator, editDetailCreator } from "../../redux/actions/book";

const ModalAdd = () => {
  const { book } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: book.bookDetail.title,
    author: book.bookDetail.author,
    synopsis: book.bookDetail.synopsis,
    release_year: book.bookDetail.realease_year,
    genre_id: book.bookDetail.genre_id,
    books_qty: book.bookDetail.qty,
    image: null,
  });

  const createUrl = () => {
    if(form.image === null){
      return null
    }else{
      return URL.createObjectURL(form.image)
    }
  } 

  console.log(createUrl())

  const genre = () => {
    switch (form.genre_id) {
      case "1":
        return "Religion";
      case "2":
        return "Biography";
      case "3":
        return "History";

      case "4":
        return "Novel";

      case "5":
        return "Comic";
      case "6":
        return "Scientific";

      default:
        return book.bookDetail.genre;
    }
  };

  const handleSubmit = (id) => {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("synopsis", form.synopsis);
    formData.append("release_year", form.release_year);
    formData.append("genre_id", form.genre_id);
    formData.append("books_qty", form.books_qty);
    if (form.image !== null) {
      formData.append("image", form.image);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const url = `${process.env.REACT_APP_API_URL}/books`;
    Axios.patch(url, formData, config)
      .then((res) => {
        console.log("edit data.........", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className='modal add fade'
        id='modal-edit'
        tabIndex='-1'
        aria-labelledby='modal-add'
        aria-hidden='true'
      >
        <div className='modal-dialog  modal-dialog-scrollable modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='modal-add'>
                Edit Data
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='row'></div>
              <div className='row'>
                <div className='col-2'>
                  <label htmlFor='image'>Image</label>
                </div>
                <div className='col-10'>
                  <input
                    className='upload'
                    name='picture'
                    type='file'
                    id='image'
                    autoComplete='off'
                    onChange={(event) =>
                      setForm({ ...form, image: event.target.files[0] })
                    }
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <label htmlFor='title'>Title</label>
                </div>
                <div className='col-10'>
                  <input
                    className='form-control shadow'
                    name='title'
                    type='text'
                    id='title'
                    autoComplete='off'
                    defaultValue={book.bookDetail.title}
                    onChange={(event) =>
                      setForm({ ...form, title: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <label htmlFor='author'>Author</label>
                </div>
                <div className='col-10'>
                  <input
                    className='form-control shadow'
                    name='author'
                    type='text'
                    id='author'
                    autoComplete='off'
                    defaultValue={book.bookDetail.author}
                    onChange={(event) =>
                      setForm({ ...form, author: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <label htmlFor='genre'>Genre</label>
                </div>
                <div className='col-10'>
                  <select
                    className='form-control'
                    id='genre'
                    name='genre'
                    onChange={(event) =>
                      setForm({ ...form, genre_id: event.target.value })
                    }
                    defaultValue={book.bookDetail.genre_id}
                  >
                    <option value='2'>Biography</option>
                    <option value='5'>Comic</option>
                    <option value='3'>History</option>
                    <option value='4'>Novel</option>
                    <option value='1'>Religion</option>
                    <option value='6'>Scientific</option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <label htmlFor='release'>
                    <p style={{ fontSize: "normal" }}>Release Date</p>
                  </label>
                </div>
                <div className='col-10'>
                  <input
                    className='form-control shadow'
                    name='release'
                    type='text'
                    id='release'
                    autoComplete='off'
                    defaultValue={book.bookDetail.realease_year}
                    onChange={(event) =>
                      setForm({ ...form, release_year: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className='row quantity'>
                <div className='col-2'>
                  <label htmlFor='qty'>Quantity</label>
                </div>
                <div className='col-10'>
                  <input
                    className='form-control shadow'
                    name='qty'
                    type='number'
                    id='qty'
                    autoComplete='off'
                    defaultValue={book.bookDetail.qty}
                    onChange={(event) =>
                      setForm({ ...form, books_qty: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <label htmlFor='des'>Description</label>
                </div>
                <div className='col-10'>
                  <textarea
                    name='des'
                    id='des'
                    className='shadow'
                    defaultValue={book.bookDetail.synopsis}
                    onChange={(event) =>
                      setForm({ ...form, synopsis: event.target.value })
                    }
                  ></textarea>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn  btn-pink btn-save'
                data-dismiss='modal'
                onClick={() => {
                  genre();
                  dispatch(editDetailCreator(
                    book.bookDetail.id,
                    form.title,
                    genre(),
                    form.image === null ? form.image : URL.createObjectURL(form.image),
                    form.release_year,
                    form.synopsis,
                    form.author,
                    form.books_qty,
                    form.genre_id,
                  ));
                  handleSubmit(book.bookDetail.id);
                  dispatch(getBookCreator());
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
