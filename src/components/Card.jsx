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
          <Row>
            <Col className="d-flex justify-content-center ">
              <Col className="grid grid-3">
                <Col className="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col class="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col class="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col class="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Col className="grid grid-3">
                <Col class="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col class="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col class="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col class="" style={{ width: "18rem" }}>
                  <a href="/dataShope">
                    <img className="ime" variant="top" src={loedpi} />
                  </a>
                  <Col className="">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button variant="outline-success" size="lg">
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
