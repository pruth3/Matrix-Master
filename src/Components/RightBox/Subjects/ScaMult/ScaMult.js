import React from 'react'; 
//eslint-disable-next-line
import tachyons from 'tachyons';
import './ScaMult.css'
//eslint-disable-next-line
import {connect} from 'react-redux';
//eslint-disable-next-line
import math from 'mathjs';

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
			<div>
				<p>ScaMult</p>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaMult);