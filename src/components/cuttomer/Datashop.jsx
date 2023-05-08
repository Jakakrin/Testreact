import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Wallper from "../../img/wallper.png";
import Logo from "../../img/logo.png";
import "../cuttomer/Datashop.css";

import Example from "../cuttomer/Modal/Modale";
// import 'bootstrap/js/src/modal'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import toyle from "../../img/loedpi.png";
function BasicExample() {
  return (

    <div className="shadow-lg p-3 mb-5 bg-white" >

      <Row >
        <Col className="d-flex justify-content-center fontherder">
          <h3>พระกรุวัดพลับ-กรุวัดพลับ</h3>
        </Col>

      </Row>
      <div className="shadow-auto p-3 mb-5 bg-white">
        <Row className="container">
          <Col sm={3}  className="d-flex justify-content-center ">
            <br />
            <img src={Logo} className="imges" alt="" />
          </Col>

          <Col>
            <Form>
              <Row className="container">
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
              <Row className="container">
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

              <Row className="container">
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
              <Row className="container">
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>จังหวัด</Form.Label>
                    <Form.Control type="text" placeholder="จังหวัด" className="form-col"/>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>


      </div>


      <div className="shadow-sm p-3 mb-5 bg-white">
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

      </div>


      <Row>
        <br />
        <Col className="d-flex justify-content-center fontherder">
          <h3>
            <br />
            <b>ใบรับรอง</b>
          </h3>
        </Col>
        <div className="shadow-sm p-3 mb-5 bg-white">
          <Row>
            <Col className="d-flex justify-content-center">
              <img className="imge" variant="top" src={Wallper} />
            </Col>
          </Row>

        </div>

      </Row>
    </div>
  );
}

export default BasicExample;
