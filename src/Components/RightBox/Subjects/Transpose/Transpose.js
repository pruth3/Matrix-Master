import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Transpose.css'
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';

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
			<div className="bg-black p2">
				<h1>Transpose</h1>
				<div> 
					<MatrixSelect	setId={"RowsTranspose"}  onChangeFunction={''} />
					<MatrixSelect	setId={"ColsTranspose"}  onChangeFunction={''} />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Transpose);