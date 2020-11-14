import React, { useEffect, useState } from "react";
import "../../assets/css/detail-page.css";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { book } = useSelector((state) => state);
  const [imageEdit, setImageEdit] = useState(null);

  const index = book.data.filter((item) => {
    return item.id === book.bookDetail.id;
  });
  useEffect(() => {
    setImageEdit(book.bookDetail.image);
  }, [book.bookDetail.image]);

  console.log(imageEdit);

  return (
    <>
      <div className='header-detail'>
        {imageEdit === null ? (
          <img src={index[0].image} alt='avenger'></img>
        ) : imageEdit.split(":")[0] === "http" ? (
          <img src={index[0].image} alt='avenger'></img>
        ) : (
          <img src={imageEdit} alt='avenger'></img>
        )}
      </div>
      <div className='picture shadow'>
        {imageEdit === null ? (
          <img src={index[0].image} alt='avenger'></img>
        ) : imageEdit.split(":")[0] === "http" ? (
          <img src={index[0].image} alt='avenger'></img>
        ) : (
          <img src={imageEdit} alt='avenger'></img>
        )}
      </div>
    </>
  );
};

export default Header;
