import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Particles from 'react-particles-js';
//eslint-disable-next-line
import tachyons from 'tachyons';
import MMtitle from '../Components/MMtitle/MMtitle';
import RightBox from '../Components/RightBox/RightBox';
import MyButton from '../Components/MyButton/MyButton';
import {setNewPage} from '../State/actions';

const mapStateToProps = (state) => { 
  return {
    page: state.newPage.page
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    setNewPage: (event) => dispatch(setNewPage(event.target.value))
  }
}

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
  render() {
    const {setNewPage, page} = this.props;
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions}/>

        <MMtitle/>

        <div className="left bg-blue white b--lightest-blue br3">
          <MyButton buttonName='Home'             setNewPage={setNewPage}/>
          <MyButton buttonName='Linear Algebra 1' setNewPage={setNewPage}/>
          <MyButton buttonName='Linear Algebra 2' setNewPage={setNewPage}/>
          <MyButton buttonName='Calculus 1'       setNewPage={setNewPage}/>
          <MyButton buttonName='Calculus 2'       setNewPage={setNewPage}/>
          <MyButton buttonName='Calculus 3'       setNewPage={setNewPage}/>
          <MyButton buttonName='Calculus 4'       setNewPage={setNewPage}/>
          <MyButton buttonName='Statistics'       setNewPage={setNewPage}/>
          <MyButton buttonName='Mechanics'        setNewPage={setNewPage}/>
          <MyButton buttonName='Electricity'      setNewPage={setNewPage}/>
          <MyButton buttonName='Modern Physics'   setNewPage={setNewPage}/>
          <MyButton buttonName='Programming'      setNewPage={setNewPage}/>
          <MyButton buttonName='About Us'         setNewPage={setNewPage}/>
          <MyButton buttonName='Contact Us'       setNewPage={setNewPage}/>
        </div>

        <RightBox page={page}/>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
