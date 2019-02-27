import React from 'react'; 
//eslint-disable-next-line
import tachyons from 'tachyons';
import './ScaMult.css'
//eslint-disable-next-line
import {connect} from 'react-redux';

const mapStateToProps = (state) => { 
  	return {

	}
}

const mapDispatchToProps = (dispatch) => { 
 	return {

	}
}

class ScaMult extends React.Component {
	render() {
		return(
			<div className="bg-black p2">
				<h1 className="center">Scalar Multiplication</h1>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaMult);