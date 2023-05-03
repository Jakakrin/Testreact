import React from "react";
// import Header from '../Header'
import Content from './Content';
import Sileconnter from './Sile_conten'
import  Carouse  from './Carousel'
const Home = () => {
  return (
    <div>
          <Carouse />
        <Content/>
        <Sileconnter />
    </div>
  );
};
  
export default Home;