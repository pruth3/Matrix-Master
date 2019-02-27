import React from 'react'; 
//eslint-disable-next-line
import tachyons from 'tachyons';
import './ScaMult.css'
//eslint-disable-next-line
import {connect} from 'react-redux';
// import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
// import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import {
	setCreateMatrix,
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {

	}
}

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreateMatrix: (event) => dispatch(setCreateMatrix(document.getElementById('rows').value, document.getElementById('cols').value))
	}
}

class ScaMult extends React.Component {
	render() {
		return(
			<div className="bg-black p2">
				<h1 className="center">Scalar Multiplication</h1>
				<div> 
					<MatrixSelect	setId={"rows"}	setCreateMatrix={setCreateMatrix} />
					<MatrixSelect	setId={"cols"}  setCreateMatrix={setCreateMatrix} />
				</div>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaMult); 