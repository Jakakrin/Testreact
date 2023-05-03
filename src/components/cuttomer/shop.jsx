import {Card,Button} from 'react-bootstrap';
 import '../about/Cardabout.css'
import namepro from '../../img/namepro.png'
import Second from '../secend'
import dorp from './drop'
function TextExamp() {
  return (
    <div class='app-section '>
      <div class='app-container  '>
        
      <Second />

    <div class='d-flex justify-content-center'>
      <h3>คลั่งพระเครื่องทั้งหมด</h3>
    </div>
    
      <div class='d-flex justify-content-center'>
  <div class='grid grid-3'>
  <Card class='' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={namepro} />
      <Card.Body>
        <Card.Text>
        นายเอ นามสกุลบี
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={namepro} />
      <Card.Body>
        <Card.Text>
       นายบี นามสกุลเอ
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={namepro} />
      <Card.Body>
        <Card.Text>
        นายซี นามสกุลจี
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={namepro} />
      <Card.Body>
        <Card.Text>
        นายจี นามสกุล ซี
        </Card.Text>
      </Card.Body>
    </Card>
    

    </div>

    
    
   

    </div>
  
      </div>
    </div>
    

    
  );
}

export default TextExamp;