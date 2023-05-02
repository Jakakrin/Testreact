import {Card,Button} from 'react-bootstrap';
 import '../about/Cardabout.css'
import namepro from '../../img/namepro.png'
function TextExampl() {
  return (
    <div class='app-section '>
      <div class='app-container  '>
    <div class='d-flex justify-content-center'>
        <h2>ทีมงาน</h2>
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

export default TextExampl;