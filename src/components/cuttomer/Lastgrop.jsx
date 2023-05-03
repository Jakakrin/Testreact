import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function TabsExample() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              ประเภทพระเครื่อง
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              พระเนื้อผง
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              ผงยา
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              ผงดินเก่า
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              พระเนื้อโลหะ
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabsExample;