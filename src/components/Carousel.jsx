import Secend from "../components/Secend";
import Card from "../components/Card";
import Carousel from "react-bootstrap/Carousel";
import { Button, Col, Row, Container } from "react-bootstrap";
import "./Carousel.css";
import wallpere from "../img/wallper.png";
import conntere from "../img/connter.png";
function Carouse() {
  return (
    <Container>
      <Row>
        <Col >
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

          <Secend />
          <Card />
        </Col>
      </Row>
    </Container>
  );
}

export default Carouse;
