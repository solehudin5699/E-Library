import React from "react";
import "../index.css";
import Header from "../components/header";
import RightBar from "../components/rightBar";
import ListBook from "../components/listBook";
import ModalAdd from '../components/modalAdd';
import NavHide from "../components/nav-hide";
import Corousel from '../components/slider-top/sliderTop';



const Home =({history}) => {
  console.log(history)
    return (
      <>
        <div className='my-container'>
            <ModalAdd/>
          <RightBar />
          <Header />
          <NavHide/>
          <main>
            <div className='slider'>
              <Corousel/>
            </div>
            <div className='listbook'>
              <ListBook props={history}/>
            </div>
          </main>
        </div>
      </>
    );
}

export default Home;
