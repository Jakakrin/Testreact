import { Card, Button, Col, Row } from "react-bootstrap";
import "../about/Cardabout.css";
import namepro from "../../img/namepro.png";
function TextExampl() {
  return (
    <Col className="app-section ">
      <Col className="app-container  ">
        <Col className="d-flex justify-content-center">
          <h2>ทีมงาน</h2>
        </Col>

        <Row className="
        d-flex justify-content-center">
          <Col className="grid grid-3 ">
            <Col className="grid-3" >
              <Card.Img variant="top" src={namepro} />
            </Col>
          </Col>
          <Col className="grid grid-3">
            <Col className="">
              <Card.Img variant="top" src={namepro} />
 
            </Col>
          </Col>
          <Col className="grid grid-3">
            <Col className="">
              <Card.Img variant="top" src={namepro} />
            </Col>
          </Col>
          <Col className="grid grid-3">
            <Col className="">
              <Card.Img variant="top" src={namepro} />

            </Col>
          </Col>
          
        </Row>

        
      </Col>
    </Col>
  );
}

export default TextExampl;
