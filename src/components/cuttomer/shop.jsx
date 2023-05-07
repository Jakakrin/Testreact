import { Card, Button, ListGroup, Collapse } from "react-bootstrap";
import { useState } from "react";
import "../cuttomer/shop.css";
import namepro from "../../img/namepro.png";
import Second from "../secend";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
function TextExamp() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row>
        <Row>
          <Col>
            <Second />
          </Col>
        </Row>

        <Row>
          <Row>
            <Col>
              <br />
              <br />

              <br />
              <Col xs={15} md={6} lg={13} className="bgtable ">
                ประเภทพระเครื่อง
              </Col>

              <Col xs={15} md={6} lg={13} className="bgtable2">
                <Col
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  พระเนื้อผง
                </Col>

                <Collapse in={open}>
                  <Col id="example-collapse-text">
                    <Col>
                      <Col>
                        <Col>ผงยา</Col>
                      </Col>

                      <Col>ผงดินเก่า</Col>
                    </Col>
                  </Col>
                </Collapse>
              </Col>

              <Col xs={15} md={6} lg={13} className="bgtable2">
                <Col>พระเนื้อโลหะ</Col>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />

              <Col md={{ span: 6, offset: 3 }}>
                <h5>คลั่งพระเครื่องทั้งหมด</h5>
              </Col>
              <Row>
                <Col>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
              </Row>
              <Row xs="auto">
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
                <Col xs={6} md={4}>
                  <a href="/dataShope">
                    <img className="imggo" variant="top" src={namepro} />
                  </a>
                  <Col className="fonts">พระกรุวัดพลับ-กรุวัดพลับ</Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Row>
    </Container>
  );
}

export default TextExamp;
