import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "../components/Card.css";
import loedpi from "../img/loedpi.png";
function TextExample() {
  return (
    <Container>
      <Row className="app-section ">
        <Col className="app-container  ">
          <Col className="md-5">
            <Col className="d-flex justify-content-center">
              <h2>คลังพระเครื่อง</h2>
            </Col>
          </Col>

          <Col className="d-flex justify-content-center">
            <Col className="grid grid-3">
              <Card class="" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={loedpi} />
                <Card.Body>
                  <Card.Text>พระกรุวัดพลับ-กรุวัดพลับ</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default TextExample;
