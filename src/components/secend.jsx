import {
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

export default function SearchBar() {
  return (
    <div className="mt-4 ">
      <div className="d-flex justify-content-center ">
        <Col sm={4}>
          <Form className="d-flex ">
            <InputGroup>
              <FormControl
                type="search"
                className=" shadow"
                placeholder="Search"

              />
            </InputGroup>
            <button className="bgbutton shadow" size="sm">
              ค้นหา
            </button>
          </Form>
        </Col>
      </div>
    </div>
  );
}
