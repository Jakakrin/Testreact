import Secend from '../components/Secend'
import Card from '../components/Card'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Carousel.css'
import Content from '../components/Content'
function Carouse() {
  return (
    <div>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/58/546/498/video-game-4k-pc-desktop-hd-wallpaper-preview.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.carro.co/blog/wp-content/uploads/2022/04/Thai-Amulets-And-Birthdate-3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/546/9/293/monster-pc-monster-notebooks-computer-game-hd-wallpaper-preview.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    
  <Secend />

  <div class="md-5">
    <div class='d-flex justify-content-center'>
      <h2>คลังพระเครื่อง</h2>
    </div>
        <Card / >

      </div>
      <div class="md-5">
      <div class='d-flex justify-content-center'>
      
      <Button variant="outline-success" size="lg">เพิ่มเติม</Button>
          </div>
      
          </div>  


        
    </div>
   
  );
}

export default Carouse;