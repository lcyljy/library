import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { keyframes, css } from "styled-components";

const SliderContainer = styled.div``;

const StyledSlider = styled(Slider)`
  height: 240px; //슬라이드 컨테이너 영역
`;

const BookSlider = (props) => {
  console.log(props.data && props.data.map((v) => v.book));
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {props.data &&
          props.data
            .map((v) => v.book)
            .map((v, i) => (
              <div className='test' key={i}>
                <div> {v.bookname}</div>
                <div> {v.authors}</div>
                <div> {v.publisher}</div>
                <div> {v.publication_year}</div>
              </div>
            ))}
      </StyledSlider>
    </SliderContainer>
  );
};

export default BookSlider;
