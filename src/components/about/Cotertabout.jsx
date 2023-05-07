import { React } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../about/Cotertabout.css";
import logo from "../../img/logo.png";
// import Cardaot from "./Cardabout";
import namepro from "../../img/namepro.png";
function Cotertabout() {
  return (
    <Container className="container ">
      <Row className="content-con contbg">
        <Col className="content-l">
          <img src={logo} alt="" />
        </Col>
        <Col className="content-r ">
          <Col className="fontcolor">
            <h2>เกี่ยวกับเรา</h2>
          </Col>
          <Col>
            <p>
              สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย
              เกิดจากการรวมตัวของผู้เชี่ยวชาญด้านพระเครื่อง
              พระบูชาแถวหน้าของเมืองไทย โดยมีวัตถุประสงค์ต้องการให้พระเครื่อง
              พระบูชาไทย เป็นที่ยอมรับของประเทศไทยและต่างประเทศ
              พร้อมทั้งให้การตรวจสอบพระเครื่องเป็นไปตามมาตรฐานสากลมากยิ่งขึ้น
              โดยการตรวจสอบพระเครื่องยึดถือตามหลักมาตรฐานสากลที่เป็นที่ยอมรับและสามารถพิสูจน์ได้จริง
              ซึ่งทางสถาบันฯรับตรวจสอบ การันตีวัตถุมงคล ประเมินราคาวัตถุมงคล
              และนอกจากนั้นวัตถุมงคลที่ผ่านการการันตีราคาจากทางสถาบันฯ
              ทางสถาบันฯยินดีรับเช่าทุกองค์
            </p>
          </Col>
        </Col>
      </Row>
      <Row className="content-con">
        <Col className="content-r contbg">
          <Col className="fontcolor" md={{ span: 6, offset: 3 }}>
            <h2>ทำไมต้องเลือกเรา</h2>
          </Col>
          <Col md={{ span: 7, offset: 3 }}>
            <p>
              สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย
              ก่อตั้งโดยคณะกรรมการผู้ทรงคุณวุฒิและมีประสบการณ์ในวงการพระเครื่องมากกว่า
              30 ปี ซึ่งเป็นที่ยอมรับและรู้จักในวงการพระเครื่องเป็นอย่างดี
              และทำให้มั่นใจได้ว่าใบรับรองจากทางสถาบัน ACI ได้ผ่านการตรวจสอบ
              สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย
              ก่อตั้งโดยคณะกรรมการผู้ทรงคุณวุฒิและมีประสบการณ์ในวงการพระเครื่องมากกว่า
              30 ปี ซึ่งเป็นที่ยอมรับและรู้จักในวงการพระเครื่องเป็นอย่างดี
              และทำให้มั่นใจได้ว่าใบรับรองจากทางสถาบัน ACI ได้ผ่านการตรวจสอบ
            </p>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="contbg">
          {/* <Cardaot /> */}
          <Col className="d-flex justify-content-center fontcolor">
            <h2>ทีมงาน</h2>
          </Col>
          <Row xs="auto">
            <Col className="">
              <img className="imgegg" variant="top" src={namepro} />
            </Col>
            <Col className="">
              <img className="imgegg" variant="top" src={namepro} />
            </Col>
            <Col className="">
              <img className="imgegg" variant="top" src={namepro} />
            </Col>
            <Col className="">
              <img className="imgegg" variant="top" src={namepro} />
            </Col>
          </Row>

          <Col>
            <Row>
              <Col className="grid grid-3"></Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Cotertabout;
