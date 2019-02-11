import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
//eslint-disable-next-line
import tachyons from 'tachyons';
import MMtitle from '../components/MMtitle/MMtitle';
import RightBox from '../components/RightBox/RightBox';
import MyButton from '../components/MyButton/MyButton';
//Divneet contribution
//comment
const particlesOptions = {
  particles: {
    number: {
      value: 30, 
      density: {
        enable: true, 
        value_area: 100
      }
    }
  }
}

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      page: 'Home'
    }
  }

  onChangePage = (event) =>  {
    let livePage = 'Home'; 
    switch(event.target.value) {
      case 'Home' : livePage='Home'; break;
      case 'Linear Algebra 1' : livePage='LinAlgOne'; break;
      case 'Linear Algebra 2' : livePage='LinAlgTwo'; break;
      case 'Calculus 1' : livePage='CalcOne'; break;
      case 'Calculus 2' : livePage='CalcTwo'; break;
      case 'Calculus 3' : livePage='CalcThree'; break;
      case 'Calculus 4' : livePage='CalcFour'; break;
      case 'Statistics' : livePage='Stats'; break;
      case 'Mechanics' : livePage='Mechanics'; break;
      case 'Electricity' : livePage='Electricity'; break;
      case 'Modern Physics' : livePage='Modern'; break;
      case 'Programming' : livePage='Programming'; break;
      case 'About Us' : livePage='AboutUs'; break;
      case 'Contact Us' : livePage='Contact'; break;
      default: livePage='Home'
    }
    console.log('onChangePage finished', livePage)
    this.setState({page: livePage})
  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions}/>

        <MMtitle/>
        
        <div className="left bg-blue white b--lightest-blue br3">
          <MyButton buttonName='Home'             onChangePage={this.onChangePage}/>
          <MyButton buttonName='Linear Algebra 1' onChangePage={this.onChangePage}/>
          <MyButton buttonName='Linear Algebra 2' onChangePage={this.onChangePage}/>
          <MyButton buttonName='Calculus 1'       onChangePage={this.onChangePage}/>
          <MyButton buttonName='Calculus 2'       onChangePage={this.onChangePage}/>
          <MyButton buttonName='Calculus 3'       onChangePage={this.onChangePage}/>
          <MyButton buttonName='Calculus 4'       onChangePage={this.onChangePage}/>
          <MyButton buttonName='Statistics'       onChangePage={this.onChangePage}/>
          <MyButton buttonName='Mechanics'        onChangePage={this.onChangePage}/>
          <MyButton buttonName='Electricity'      onChangePage={this.onChangePage}/>
          <MyButton buttonName='Modern Physics'   onChangePage={this.onChangePage}/>
          <MyButton buttonName='Programming'      onChangePage={this.onChangePage}/>
          <MyButton buttonName='About Us'         onChangePage={this.onChangePage}/>
          <MyButton buttonName='Contact Us'       onChangePage={this.onChangePage}/>
        </div>
        <RightBox page={this.state.page}/>

      </div>
    );
  }
}

export default App;
