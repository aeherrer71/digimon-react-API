import React, { Component, useState } from "react";

import './App.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


class Digimon extends Component {
  
  constructor() {
      super()
      this.state = {
          digimon: [],
          current: 0
      }
  }


  componentDidMount(){
      fetch("https://digimon-api.vercel.app/api/digimon")
          .then(res => res.json())
          .then(res => this.setState({ 
              digimon: res
          }))
  }

  

  render() {

    let length = this.state.digimon.length
    
  if((!this.state.digimon) || length <=0) {
    return null;
}  

const nextSlide = () => {

  if(this.state.current === length - 1){
    this.setState({current: 0})
  }else this.setState({current: this.state.current + 1})
}

const prevSlide = () => {

  if(this.state.current === 0){
    this.setState({current: length -1})
  }else this.setState({current: this.state.current - 1})
}

      return (
 

          <div className="slider">

               <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />

                   {
                      this.state.digimon.length > 0 
                          && this.state.digimon.map((digimon, index) => {
                              return(
                                <div className={index === this.state.current ? 'digimon active' : 'digimon'} key={index}>

                                 {index === this.state.current && (<img src={digimon.img} className='image'
                                      alt='Digimon'
                      
                                  />)} 
                                  


                                </div>
                                
                              )
                              
                          })
                  }
                                 <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         
          </div>
      );
  }
}

export default Digimon;