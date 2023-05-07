import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "../components/Card.css";
import loedpi from "../img/loedpi.png";
function TextExample() {
  return (
    <div className="shadow-auto p-3 mb-5 bg-white">
      <div>
        <Col className="md-5 ">
          <Col className="d-flex justify-content-center fontherder ">
            <h2>คลังพระเครื่อง</h2>
          </Col>
        </Col>
      </div>
<div>
  <Row xs="auto d-flex justify-content-center ">
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
      </Row>
      <Row xs="auto d-flex justify-content-center ">
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
        <Col className="">
          <a href="/dataShope">
            <img className="ime" variant="top" src={loedpi} />
          </a>
          <h6>พระกรุวัดพลับ-กรุวัดพลับ</h6>
        </Col>
      </Row>
      <Col className="d-flex justify-content-center">
              <button className="bgbutton shadow" size="lg">
                เพิ่มเติม
              </button>
            </Col>

</div>
    
    </div>
  );
}

export default TextExample;
