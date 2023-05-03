import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Wallper from '../../img/wallper.png'
import '../cuttomer/Datashop.css'
function BasicExample() {
  return (
   
    <div>
<div>
<div>
<Form>
    <Row>
<Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ผู้ครอบครอง</Form.Label>
        <Form.Control type="email" placeholder="ชื่อผู้ครอบครอง" />
      </Form.Group>
    </Col>
    <Col>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>รหัสตรวจสอบพระ</Form.Label>
        <Form.Control type="password" placeholder="รหัสตรวจสอบพระ" />
      </Form.Group>
    </Col>

    </Row>
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ชื่อพระ</Form.Label>
        <Form.Control type="password" placeholder="ชื่อพระ" />
      </Form.Group>
      </Col>
     <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>วัด</Form.Label>
        <Form.Control type="password" placeholder="วัด" />
      </Form.Group>
      </Col>
        
        </Row>  

    <Row>

    <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>พิมพ์</Form.Label>
        <Form.Control type="password" placeholder="พิมพ์" />
      </Form.Group>
      </Col>
     <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>เนื้อ</Form.Label>
        <Form.Control type="password" placeholder="เนื้อ" />
      </Form.Group>
      </Col>
     <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>จังหวัด</Form.Label>
        <Form.Control type="password" placeholder="จังหวัด" />
      </Form.Group>
      </Col>

    </Row>
     
     
     
        
        
        

    
     
    </Form>

</div>

    <div class='d-flex justify-content-center'>
            <h3><b>รูปพระเพิ่มเติม</b></h3>
            
            <div class='d-flex justify-content-center'>
            
              <img class="imgeshow" variant="top" src={Wallper} />  
              <img class="imgeshow" variant="top" src={Wallper} />  
              <img class="imgeshow" variant="top" src={Wallper} />  
              <img class="imgeshow" variant="top" src={Wallper} />  
            </div>
            
    </div>
 
    
    <div class='d-flex justify-content-center'>
   

    </div>
    <div class='d-flex justify-content-center'>
        <h3><b>ใบรับรอง</b></h3>   
    </div>
    <div class='d-flex justify-content-center'>
<img class='imge'variant="top" src={Wallper} />

    </div>
    
   </div>
    </div>
    
  );
}

export default BasicExample;