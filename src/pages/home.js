import React from "react";
import "../index.css";
import Header from "../components/header";
import RightBar from "../components/rightBar";
// import TopSlider from '../components/topSlider';
import ListBook from "../components/listBook";
import ModalAdd from '../components/modalAdd';
import NavHide from "../components/nav-hide";
import Corousel from "../components/corousel";



class Home extends React.Component {
  
  render() {
    return (
      <>
        <div className='my-container'>
            <ModalAdd/>
          <RightBar />
          <Header />
          <NavHide/>
          <main>
            <div className='row topslider'>
              {/*<TopSlider/>*/} 
              <Corousel key={2323}/>
            </div>
            <div className='listbook'>
              <ListBook key={212212}/>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
