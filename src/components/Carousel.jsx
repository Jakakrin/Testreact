import Secend from "../components/Secend";
import Card from "../components/Card";
import Carousel from "react-bootstrap/Carousel";
import { Button, Col, Row, Container } from "react-bootstrap";
import "./Carousel.css";
import wallpere from "../img/wallper.png";
import conntere from "../img/connter.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Carouse() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bgslide"
      >
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wallpere} alt="" /></SwiperSlide>
      </Swiper>

      <Row>
        <Col>
          <Secend />
          <Card />
        </Col>
      </Row>
    </>
  );
}

export default Carouse;
