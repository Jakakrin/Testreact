// import Secend from "../components/Secend";
// import Card from "../components/Card";
import { Carousel, Col, Row, Container } from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Carousel.css";
import wallpere from "../img/wallper.png";
import conntere from "../img/connter.png";
function Carouse() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block Carou d-flex justify-content-center"
                src={wallpere}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block Carou d-flex justify-content-center"
                src={conntere}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block Carou d-flex justify-content-center"
                src={wallpere}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          {/* <Secend /> */}
          {/* <Card /> */}

          <Col className="md-5">
            <Col className="d-flex justify-content-center">
              <Button variant="outline-success" size="lg">
                เพิ่มเติม
              </Button>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Carouse;
