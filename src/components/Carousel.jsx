import Secend from "../components/Secend";
import Card from "../components/Card";
import Carousel from "react-bootstrap/Carousel";
import { Button, Col, Row, Container } from "react-bootstrap";
import "./Carousel.css";
import Content from "../components/Content";
import wallpere from "../img/wallper.png";
import conntere from "../img/connter.png";
import Sileconnter from "../components/Sile_conten";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Carouse() {
  return (
    <>
      <div>
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
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={wallpere} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="">
        <Col>
          <div>
            <Secend />
          </div>
        </Col>
      </div>
      <div className="">
        <div className="shadow-sm p-3 mb-5 bg-white">
          <Card />
        </div>
        <div className="shadow-sm p-3 mb-5 bg-white">
          <Content />
        </div>

        <div className="shadow-sm p-3 mb-5 bg-white">
          <Sileconnter />
        </div>
      </div>
    </>
  );
}

export default Carouse;
