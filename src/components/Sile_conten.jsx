import Carousel from "react-bootstrap/Carousel";
import Paepa from "../img/paepa.png";
import "../components/Sile_conten.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation ,FreeMode} from "swiper";

// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
function Darkconten() {
  return (
    <>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paepa} alt="" /></SwiperSlide>
      </Swiper>
    </>
    // <Container>
    //   <Row>
    //     <Col className="d-flex justify-content-center fontherder">
    //       <h3>ข่าวสารและกิจกรรม</h3>
    //     </Col>
    //   </Row>

    //   <Col className="sile_conter contbg">
    //     <Carousel variant="dark">
    //       <Carousel.Item>
    //         <Row>
    //           <Col>
    //             <img className="" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //         </Row>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Row>
    //           <Col>
    //             <img className="" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //         </Row>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Row>
    //           <Col>
    //             <img className="" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //           <Col>
    //             <img className="d-block" src={Paepa} alt="First slide" />
    //           </Col>
    //         </Row>
    //       </Carousel.Item>
    //     </Carousel>
    //   </Col>
    // </Container>
  );
}

export default Darkconten;
