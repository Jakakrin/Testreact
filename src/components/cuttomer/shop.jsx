import "../cuttomer/shop.css";
import namepro from "../../img/namepro.png";
import Second from "../secend";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tabs from "../cuttomer/Lastgrop";
import Container from "react-bootstrap/Container";
function TextExamp() {
  return (
    <Container>
      <Row>
        <Row>
          <div className=" col-sm- d-flex justify-content-center">
            <input type="search" className=" inpuet shadow" />
            <button className="bgbutton shadow" size="sm">
              ค้นหา
            </button>
          </div>
        </Row>

        <Row>
          <Col>
            <br />
            <div className=" col-sm-17 d-flex justify-content-center">
              
              <div className="fontpa" >คลั่งพระเครื่องทั้งหมด</div>
            </div>
           
            <Col>
            <Row>
                 <Col>
             
                <Tabs />
              </Col>
              <Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
              </Col>
              <Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
              </Col>
              <Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                <a href="/dataShope">
                  <img className="imggo" variant="top" src={namepro} />
                </a>
                <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
              </Col>
            </Row>
           
            </Col>

          
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default TextExamp;
