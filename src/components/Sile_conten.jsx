import Carousel from 'react-bootstrap/Carousel';
import Paepa from '../img/paepa.png'
function Darkconten() {
  return (
    <div>
        <div class='d-flex justify-content-center'>
       <h3>ข่าวสารและกิจกรรม</h3> 
        </div>
         <div class='sile_conter'>
 <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src={Paepa}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={Paepa}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Paepa}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Paepa}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Paepa}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Paepa}
          alt="Third slidesss"
        />
      </Carousel.Item>
    </Carousel>

    </div> 
    </div>
  
   
  );
}

export default Darkconten;