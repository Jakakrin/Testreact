import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function TabsExample() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row>
            <Col>
            <Col  className="bgtable fontsishop ">
              ประเภทพระเครื่อง
            </Col>

            <Col  className="bgtable2">
              <Col
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='fontsishop'
              >
                พระเนื้อผง
              </Col>

              <Collapse in={open}>
                <Col id="example-collapse-text">
                  <Col>
                    <Col>
                      <Col className='fontsishop'>ผงยา</Col>
                    </Col>

                    <Col className='fontsishop'>ผงดินเก่า</Col>
                  </Col>
                </Col>
              </Collapse>
            </Col>

            <Col  className="bgtable2">
              <Col className='fontsishop'>พระเนื้อโลหะ</Col>
            </Col>
          </Col>
      </Row>
    </Container>
  );
}

export default TabsExample;