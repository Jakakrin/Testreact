import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";


function TabsExample() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row>
        <Col>
          <button className="bgtable fontsishop  bgtable">
            ประเภทพระเครื่อง
          </button>

          <button className="">
            <Col
            id="accordion" 
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="fontsishop bgtable2 accordion"
            >
              พระเนื้อผง <i className="fa-solid fa-caret-down"></i>

             
            </Col>

            <Collapse in={open}>
              <Col id="example-collapse-text " >
                <Col>
                  <Col>
                    <Col className="fontsishop">ผงยา</Col>
                  </Col>

                  <Col className="fontsishop">ผงดินเก่า</Col>
                </Col>
              </Col>
            </Collapse>
          </button>

          <button className="bgtable1">
            <label className="fontsishop accordion">พระเนื้อโลหะ </label>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default TabsExample;
