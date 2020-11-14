import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./slider-top.css";

import nextArrow from "../../assets/images/image/nextArrow.png";
import prevArrow from "../../assets/images/image/prevArrow.png";

import book1 from "../../assets/images/book/1.jpg";
import book2 from "../../assets/images/book/3.jpg";
import book3 from "../../assets/images/book/4.jpg";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        padding: "2vw",
        borderRadius: "50%",
        marginRight: "3vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <img src={nextArrow} alt='' className='topslider-arrow' />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        marginLeft: "3vw",
        zIndex: 1,
        padding: "2vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img src={prevArrow} alt='' className='topslider-arrow' />
    </div>
  );
};
const SliderTop = () => {
  const { book } = useSelector((state) => state);
  const dataBook = () => {
    if (!book.data.length || book.data === undefined) {
      return [
        {
          image: book1,
          title: "Weathering With You",
          author: "Honda Sahara",
        },
      ];
    } else return book.data.slice(0, 5);
  };

  const localData = [
    {
      image: book2,
      title: "Flying Traveller",
      author: "Yamaha Kishimoto",
    },
    {
      image: book3,
      title: "The Metropolitan",
      author: "Nawirudin",
    },
  ];
  const dataSlide = localData.concat(dataBook());
  console.log(dataBook());

  const settings = {
    dots: true,
    className: "top-slider",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    centerPadding: "60px",
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {dataSlide.map((item, index) => {
            return (
              <div className='topslider-items' key={index}>
                <div className='topslider-item'>
                  <img
                    src={item.image}
                    alt=''
                    className='slider-top-img img-fluid'
                  />
                  <div className='overlay'>
                    <h4>{item.title}</h4>
                    <p>{item.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default SliderTop;
