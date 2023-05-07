import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "../components/Card.css";
import loedpi from "../img/loedpi.png";
function TextExample() {
  return (
    <Container>
      <Row className="app-section ">
        <Col className="app-container  ">
          <Col className="md-5 ">
            <Col className="d-flex justify-content-center fontherder ">
              <h2>คลังพระเครื่อง</h2>
            </Col>
          </Col>
          <Row xs="auto">
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
          </Row>
          <Row xs="auto">
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
            <Col className="">
              <a href="/dataShope">
                <img className="ime" variant="top" src={loedpi} />
              </a>
              <Col>พระกรุวัดพลับ-กรุวัดพลับ</Col>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button className="bgtong" variant="success" size="lg">
                เพิ่มเติม
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TextExample;
