import React from 'react'; 
//eslint-disable-next-line
import tachyons from 'tachyons';
import './LinAlgTwo.css'
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

class LinAlgTwo extends React.Component {
	render() {
		return(
			<div>
				<p>LinAlgTwo</p>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinAlgTwo);