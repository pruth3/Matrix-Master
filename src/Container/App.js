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
    setNewPage: (event) => dispatch(
      setNewPage(
        event.target.value
      )
    )
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

//<Particles className='particles' params={particlesOptions}/>

class App extends Component {
  render() {
    const {
      setNewPage, 
      page
    } = this.props;
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions}/>
        <MMtitle/>
        <div className="left bg-blue white b--lightest-blue br3">
          <MyButton buttonName='Home'                     setNewPage={setNewPage}/>
          <MyButton buttonName='Dot Product'              setNewPage={setNewPage}/>
          <MyButton buttonName='Cross Product'            setNewPage={setNewPage}/>
          <MyButton buttonName='Matrix Addition'          setNewPage={setNewPage}/>
          <MyButton buttonName='Scalar Multiplication'    setNewPage={setNewPage}/>
          <MyButton buttonName='Transpose'                setNewPage={setNewPage}/>
          <MyButton buttonName='Matrix Multiplication'    setNewPage={setNewPage}/>
          <MyButton buttonName='Solve Matrix'             setNewPage={setNewPage}/>
          <MyButton buttonName='Linear Mapping'           setNewPage={setNewPage}/>
          <MyButton buttonName='Inverse'                  setNewPage={setNewPage}/>
          <MyButton buttonName='Determinant'              setNewPage={setNewPage}/>
          <MyButton buttonName='Area of Parallelogram'    setNewPage={setNewPage}/>
          <MyButton buttonName='Exponential'              setNewPage={setNewPage}/>
          <MyButton buttonName='Trace'                    setNewPage={setNewPage}/>
          <MyButton buttonName='Contributors'             setNewPage={setNewPage}/>
        </div>
        <RightBox page={page}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


