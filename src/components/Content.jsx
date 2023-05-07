import React from "react";
import "./Content.css";
import Button from "react-bootstrap/Button";
import Conter from "../img/connter.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Content() {
  return (
    <div className="container">
      <section className="content-con ">
        <Row>
        
          <Col className="content-r contbg">
            <Col className="fontherder">
              <h2>ทำไมต้องเลือกเรา</h2>
            </Col>
            <p>
              สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย
              ก่อตั้งโดยคณะกรรมการผู้ทรงคุณวุฒิและมีประสบการณ์ในวงการพระเครื่องมากกว่า
              30 ปี ซึ่งเป็นที่ยอมรับและรู้จักในวงการพระเครื่องเป็นอย่างดี
              และทำให้มั่นใจได้ว่าใบรับรองจากทางสถาบัน ACI ได้ผ่านการตรวจสอบ
            </p>
            <Button className="bgtongee" variant="outline-success">
              เพิ่มเติม
            </Button>{" "}
          </Col>
            <Col className="content-l">
            <img src={Conter} alt="" />
          </Col>
        </Row>
      </section>
    </div>
  );
}
//xs={1} md={2}
export default Content;
