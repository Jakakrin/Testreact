import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import loedpie from "../../../img/loedpi.png";
import "../Modal/Modale.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";
function Example() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="">
        <Row className="grid-3">
          <Col>
            <Col>
              <Row>
                <Col>
                  <img
                    className="imgsss"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Col>
                <Col>
                  <img
                    className="imgsss"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Col>
                <Col>
                  <img
                    className="imgsss"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Col>
                <Col>
                  <img
                    className="imgsss"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Col>
              </Row>
            </Col>

            <Modal
              centered
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-sm">
                  {/* <img
                    className="imgmodal"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  /> */}
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    zoom={true}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-zoom-container">
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Modal.Title>
              </Modal.Header>
            </Modal>
          </Col>
        </Row>
      </div>

      {/*       
      <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
    </>
  );
}

export default Example;
