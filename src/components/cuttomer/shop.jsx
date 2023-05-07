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
          <Col>
            <Second />
          </Col>
        </Row>

        <Row>
          <Col>
            <br />

            <Col className="d-flex justify-content-center">
              <h5>คลั่งพระเครื่องทั้งหมด</h5>
            </Col>
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
