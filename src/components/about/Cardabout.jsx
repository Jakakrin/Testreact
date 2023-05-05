import { Card, Button, Col, Row,Container } from "react-bootstrap";
import "../about/Cardabout.css";
import namepro from "../../img/namepro.png";
function TextExampl() {
  return (
    <Container>



   
    <Col className="app-section ">
      <Col className="app-container  ">
        <Col className="d-flex justify-content-center">
          <h2>ทีมงาน</h2>
        </Col>

        <Row className="d-flex justify-content-center">
          <Col className="grid grid-3">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={namepro} />
            </Col>
          </Col>
          <Col className="grid">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={namepro} />
 
            </Col>
          </Col>
          <Col className="grid">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={namepro} />
            </Col>
          </Col>
          <Col className="grid">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={namepro} />

            </Col>
          </Col>
          
        </Row>

        
      </Col>
    </Col>
    </Container>
  );
}

export default TextExampl;
