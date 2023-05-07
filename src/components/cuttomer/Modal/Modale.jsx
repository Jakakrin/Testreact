import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import loedpie from "../../../img/loedpi.png";
import "../Modal/Modale.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
function Example() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Container>
        <Row className="grid-3">
          <Col>
            <Col>
              <Row>
                <Col>
                  <img
                    className="imgsss"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Col>
                <Col>
                  <img
                    className="imgsss"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Col>
                <Col>
                  <img
                    className="imgsss"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Col>
              </Row>
            </Col>

            <Modal
              centered
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-sm">
                  <img
                    className="imgmodal"
                    variant="top"
                    src={loedpie}
                    onClick={() => setSmShow(true)}
                  />
                </Modal.Title>
              </Modal.Header>
            </Modal>
          </Col>
        </Row>
      </Container>

      {/*       
      <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
    </>
  );
}

export default Example;
