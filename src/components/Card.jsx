import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "../components/Card.css";
import loedpi from "../img/loedpi.png";
function TextExample() {
  return (
    <Container>
      <Row className="app-section ">
        <Col className="app-container  ">
          <Col className="d-flex justify-content-center">
            <h2>คลังพระเครื่อง</h2>
          </Col>
        </Col>
         <Row className="d-flex justify-content-center">
          <Col className="grid grid-3">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={loedpi} />
            </Col>
          </Col>
          <Col className="grid">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={loedpi} />
 
            </Col>
          </Col>
          <Col className="grid">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={loedpi} />
            </Col>
          </Col>
          <Col className="grid">
            <Col className="" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={loedpi} />

            </Col>
          </Col>
          
        </Row>

      </Row>
    </Container>
  );
}

export default TextExample;
