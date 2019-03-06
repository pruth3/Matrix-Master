import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Transpose.css'

const mapStateToProps = (state) => { 
	return {

	}
}

const mapDispatchToProps = (dispatch) => { 
	return {
		
	}
}

class Transpose extends React.Component {
	render() {
		return(
			<h1>Transpose</h1>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Transpose);  