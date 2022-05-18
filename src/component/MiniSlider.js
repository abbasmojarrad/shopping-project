import React from "react";
import Slider from "react-slick";
import styles from "./minislider.module.css";
import img from "../assets/box3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const SampleNextArrow = ({ className, onClick }) => (
  <BsFillArrowRightCircleFill
    color="#000"
    className={className}
    onClick={onClick}
  />
);
const SamplePrevArrow = ({ className, onClick }) => (
  <div >
      <BsFillArrowLeftCircleFill
    color="#000"
    className={className}
    onClick={onClick}
  />
  </div>

);

function MiniSlider() {
  const items = [
    { id: 1, name: "bag", price: "25$", image: { img } },
    { id: 2, name: "shoe", price: "21$", image: { img } },
    { id: 3, name: "bag", price: "23$", image: { img } },
    { id: 4, name: "bag", price: "56$", image: { img } },
    { id: 5, name: "bag", price: "34$", image: { img } },
    { id: 6, name: "bag", price: "22$", image: { img } },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };
  return (
    <div className={styles.minislider}>
      <h2 className={styles.hedingminislide}> Best Offer </h2>
      <Slider {...settings}>
        {items.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardtop}>
                {/* <img src={item.image} alt="item" /> */}
              </div>
              <div className={styles.cardbottom}>
                <h3 className={styles.cardname}>{item.name}</h3>
                <h3 className={styles.cardprice}>{item.price}</h3>
              </div>
            </div>
          );
        })}
      </Slider>
      <button className={styles.viewbtn}>View All</button>
    </div>
  );
}

export default MiniSlider;
