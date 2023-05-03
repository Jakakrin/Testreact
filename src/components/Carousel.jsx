import Secend from "../components/Secend";
import Card from "../components/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Carousel.css";
import wallpere from "../img/wallper.png";
import conntere from "../img/connter.png";
function Carouse() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={wallpere}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={conntere} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/546/9/293/monster-pc-monster-notebooks-computer-game-hd-wallpaper-preview.jpg"
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>

      <Secend />

      <div className="md-5">
        <div className="d-flex justify-content-center">
          <h2>คลังพระเครื่อง</h2>
        </div>
        <Card />
      </div>
      <div className="md-5">
        <div className="d-flex justify-content-center">
          <Button variant="outline-success" size="lg">
            เพิ่มเติม
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Carouse;
