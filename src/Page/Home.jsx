import { Component } from "react";
import Content from "../components/Content";
import Sileconnter from "../components/Sile_conten";
import Carouse from "../components/Carousel";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carouse />
        <Content />
        <Sileconnter />
      </div>
    );
  }
}
