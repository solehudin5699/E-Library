import React from "react";
import Axios from "axios";
import {connect} from 'react-redux';
import {getBookCreator } from '../redux/actions/book'

class ModalAdd extends React.Component {
  state = {
    title: '',
    author: '',
    synopsis: '',
    release_year: null,
    genre_id: 1,
    books_qty: null,
    image: null,

  };
  handleSubmit = () => {
    let formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('author', this.state.author);
    formData.append('synopsis', this.state.synopsis);
    formData.append('release_year', this.state.release_year);
    formData.append('genre_id', this.state.genre_id);
    formData.append('books_qty', this.state.books_qty);
    formData.append('image', this.state.image);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    const url = process.env.REACT_APP_BOOK;
    Axios.post(url, formData, config)
      .then((res) => {
        this.props.getBookCreator()
      }).catch((err) => {
        console.log(err);
      });
  };


  render() {
    return (
      <>

        <div className="modal add fade" id="modal-add" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-add">Add Data</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="image">Image</label>
                  </div>
                  <div className="col-10">
                    <input className="upload" name="picture" type="file" id="image" autoComplete="off" 
                    onChange={(event) => this.setState({image: event.target.files[0]})}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="title" type="text" id="title" autoComplete="off" 
                    onChange={(event) => this.setState({title: event.target.value})}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="author">Author</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="author" type="text" id="author" autoComplete="off" 
                    onChange={(event) => this.setState({author: event.target.value})}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="genre">Genre</label>
                  </div>
                  <div className="col-10">
                    <select className="form-control" id="genre" name="genre" 
                    onChange={(event) => this.setState({genre_id: event.target.value})}>    
                      <option value="2">Biography</option>
                      <option value="5">Comic</option>
                      <option value="3">History</option>
                      <option value="4" defaultValue>Novel</option>
                      <option value="1">Religion</option>
                      <option value="6">Scientific</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="release"><p style={{fontSize: "normal"}}>Release Date</p></label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="release" type="text" id="release" autoComplete="off" 
                    onChange={(event) => this.setState({
                      release_year: event.target.value
                    })}/>
                  </div>
                </div>
                <div className="row quantity">
                  <div className="col-2">
                    <label htmlFor="qty">Quantity</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="qty" type="number" id="qty" autoComplete="off" 
                    onChange={(event) => this.setState({books_qty: event.target.value})}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="des">Description</label>
                  </div>
                  <div className="col-10">
                    <textarea name="des" id="des" className="shadow" onChange={(event) => this.setState({synopsis: event.target.value})}></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn  btn-pink btn-save" data-dismiss="modal" onClick={() => this.handleSubmit()}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    getBookCreator:()=>{
      dispatch(getBookCreator())
    }
  }
}


export default connect(null,mapDispatchToProps)( ModalAdd);