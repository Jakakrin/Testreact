import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Wallper from "../../img/wallper.png";
import Logo from "../../img/logo.png";
import "../cuttomer/Datashop.css";

import Example from "../cuttomer/Modal/Modale";
// import 'bootstrap/js/src/modal'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import toyle from "../../img/loedpi.png";
function BasicExample() {
  return (
    <Container fluid="md">
      <Col className="d-flex justify-content-center fontherder">
        <h3>พระกรุวัดพลับ-กรุวัดพลับ</h3>
      </Col>

      <Row>
        <Col md={4}>
          <br />
          <img src={Logo} className="imges" alt="" />
        </Col>

        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label>ผู้ครอบครอง</Form.Label>
                  <Form.Control
                    className=""
                    type="text"
                    placeholder="ชื่อผู้ครอบครอง"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>รหัสตรวจสอบพระ</Form.Label>
                  <Form.Control type="id" placeholder="รหัสตรวจสอบพระ" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>ชื่อพระ</Form.Label>
                  <Form.Control type="text" placeholder="ชื่อพระ" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>วัด</Form.Label>
                  <Form.Control type="text" placeholder="วัด" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>พิมพ์</Form.Label>
                  <Form.Control type="text" placeholder="พิมพ์" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>เนื้อ</Form.Label>
                  <Form.Control type="text" placeholder="เนื้อ" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>จังหวัด</Form.Label>
                  <Form.Control type="text" placeholder="จังหวัด" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center fontherder">
          <h3>
            <b>รูปพระเพิ่มเติม</b>
          </h3>
          <br />
        </Col>
        <br />
        <Row>
          <Col className="d-flex justify-content-center ">
            <Example />
          </Col>
        </Row>
      </Row>

      <Row>
        <br />
        <Col className="d-flex justify-content-center fontherder">
          <h3>
            <br />
            <b>ใบรับรอง</b>
          </h3>
        </Col>
        <Row>
          <Col className="d-flex justify-content-center">
            <img className="imge" variant="top" src={Wallper} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default BasicExample;
