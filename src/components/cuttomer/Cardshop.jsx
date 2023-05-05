import { Card, Button } from "react-bootstrap";
import "../cuttomer/shop.css";
import namepro from "../../img/namepro.png";
import Second from "../..components/secend";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Lastgrop from "../../components/cuttomer/Lastgrop";
// import Stack from 'react-bootstrap/Stack';
function TextExamp() {
  return (
    <Container>
      <Row>
        <Col>
          <Second />
          <Col className="d-flex justify-content-center">
            <h3>คลั่งพระเครื่องทั้งหมด</h3>
          </Col>
        </Col>

        <Row>
          <Col>
            <Lastgrop />
          </Col>
          <Col>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
       
        
        {/* <Row xs={5}>
          <Col></Col>
          <Col>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={2}>
            <Card className="imgcard">
              <Card.Img variant="top" src={namepro} />
              <Card.Body>
                <Card.Text>นายเอ นามสกุลบี</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Row>
    </Container>
  );
}

export default TextExamp;
