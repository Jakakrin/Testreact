import { Card, Button, ListGroup } from "react-bootstrap";
import "../cuttomer/shop.css";
import namepro from "../../img/namepro.png";
import Second from "../secend";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Lastgrop from "../../components/cuttomer/Lastgrop";
function TextExamp() {
  return (
    <Container>
      <Row>
        <Col>
          <Second />
          <br />
          <Col className="d-flex justify-content-center fontcolor">
            <h3>คลั่งพระเครื่องทั้งหมด</h3>
          </Col>
        </Col>

        <Row>
          <Col>
            <Col className="bgtable2">
              <ListGroup className="bgtable2">
                <ListGroup.Item className="bgtable">
                  <label>ประเภทพระเครื่อง</label>
                </ListGroup.Item>
                <ListGroup.Item>พระเนื้อผง</ListGroup.Item>
                <ListGroup.Item>ผงยา</ListGroup.Item>
                <ListGroup.Item>ผงดินเก่า</ListGroup.Item>
                <ListGroup.Item>พระเนื้อโลหะ</ListGroup.Item>
              </ListGroup>    
                <Col>
                  <img className="imggo" src={namepro} />
                </Col>
                <Col>นายเอ นามสกุลบี</Col>
            </Col>
          </Col>

       
          
        </Row>
      </Row>
    </Container>
  );
}

export default TextExamp;
