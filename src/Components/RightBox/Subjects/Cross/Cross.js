 import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Cross.css'
import Matrix from '../../Reusable/Matrix/Matrix';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import CrossMatrix from './CrossMatrix/CrossMatrix';
import {
	setCreateCross, 
	setModifyCrossMatrix1, 
	setModifyCrossMatrix2, 
	setSolveCross, 
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		rows: state.createMatrix.CrossRows, 
  		matrixArray1: state.createMatrix.CrossArray1,
  		matrixArray2: state.createMatrix.CrossArray2,
  		solve: state.createMatrix.solveCross, 
	}
} 

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreate: (event) => dispatch(
 			setCreateCross() 
 		),

 		setModify1: (event) => dispatch(
 			setModifyCrossMatrix1(
 				event.target.id, 
 				event.target.value
 			)
 		),
 		setModify2: (event) => dispatch(
 			setModifyCrossMatrix2(
 				event.target.id, 
 				event.target.value
 			)
 		), 
		setSolve: () => dispatch(
 			setSolveCross()
 		), 
	}
}

class Cross extends React.Component {

	componentDidMount() {
		this.props.setCreate();
	}
	render() {
		const {rows, matrixArray1, matrixArray2, solve, setModify1, setModify2, setSolve} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Cross Product</h1>
				<div> 
					<div>
						<Matrix assignID={'matI'} rows={rows} cols="1" onChangeFunction={setModify1}/>
						<div className="symbol"><p>x</p></div>
						<Matrix assignID={'matJ'} rows={rows} cols="1" onChangeFunction={setModify2}/>
					</div>
					<CalculateButton onClickFunction={setSolve} />
				</div>
				{
					(solve) ? 
						<CrossMatrix matrix1={matrixArray1} matrix2={matrixArray2} /> 
					:(rows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cross);  