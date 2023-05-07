import React from "react";
import "./Content.css";
import Button from "react-bootstrap/Button";
import Conter from "../img/connter.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Content() {
  return (
    <div className=" ">
      <Row className="">
        <Col  md={{ span: 4, offset: 2 }} className="contbg  order: 2 ">
          <Col className="fontherder">
            <h2>ทำไมต้องเลือกเรา</h2>
          </Col>
          <p>
            สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย
            ก่อตั้งโดยคณะกรรมการผู้ทรงคุณวุฒิและมีประสบการณ์ในวงการพระเครื่องมากกว่า
            30 ปี ซึ่งเป็นที่ยอมรับและรู้จักในวงการพระเครื่องเป็นอย่างดี
            และทำให้มั่นใจได้ว่าใบรับรองจากทางสถาบัน ACI ได้ผ่านการตรวจสอบ
          </p>
          <button className="bgbutton" variant="">
            เพิ่มเติม
          </button>{" "}
        </Col>
        <Col className="content-l ">
            <img src={Conter} alt="" />
            </Col>
        <Col  xs={6} md={4}  >
        
          
        </Col>
      </Row>
    </div>
  );
}
//xs={1} md={2}
export default Content;
