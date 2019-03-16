import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './Expon.css'
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import MatrixExpon from './MatrixExpon/MatrixExpon'
import {
	setCreateExpon, 
	setModifyExponMatrix, 
	setSolveExpon, 
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		rows: state.createMatrix.ExponRows, 
  		matrixArray: state.createMatrix.ExponArray,
  		solve: state.createMatrix.solveExpon, 
	}
} 

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreate: (event) => dispatch(
 			setCreateExpon(
 				document.getElementById('rowsExpon').value, 
 			) 
 		),

 		setModify: (event) => dispatch(
 			setModifyExponMatrix(
 				event.target.id, 
 				event.target.value
 			)
 		), 
		setSolve: () => dispatch(
 			setSolveExpon()
 		), 
	}
}

class Expon extends React.Component {
	render() {
		const {rows, matrixArray, solve, setCreate, setModify, setSolve} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Matrix Exponential</h1>
				<div> 
					<MatrixSelect	setId={"rowsExpon"}  onChangeFunction={setCreate} />
				</div>
				{ 
					(rows) ?
						<div> 
							<div>
								<Matrix assignID={'matG'} rows={rows} cols={rows} onChangeFunction={setModify}/>
							</div>
							<CalculateButton onClickFunction={setSolve} />
						</div>
					:  
						<p></p>
				}
				{
					(solve) ? 
						<MatrixExpon matrix={matrixArray}/> 
					:(rows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Expon);  