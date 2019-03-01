import React from 'react'; 
//eslint-disable-next-line
import tachyons from 'tachyons';
import './ScaMult.css'
//eslint-disable-next-line
import {connect} from 'react-redux';
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
// import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import {
	setCreateMatrix,
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		row: state.createMatrix.ScaMultRows, 
  		col: state.createMatrix.ScaMultCols
	}
}

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreateMatrix: (event) => dispatch(
 			setCreateMatrix(
 				document.getElementById('RowsSM').value, 
 				document.getElementById('ColsSM').value
 			)
 		)
	}
}

class ScaMult extends React.Component {
	render() {
		const {row, col} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Scalar Multiplication</h1>
				<div> 
					<MatrixSelect	setId={"RowsSM"}  setCreateMatrix={setCreateMatrix} />
					<MatrixSelect	setId={"ColsSM"}  setCreateMatrix={setCreateMatrix} />
				</div>
				{ 
					(col) ?
						<div> 
							<div>
								<Matrix assignID={'mat3'} rows={row} cols={col} />
							</div>
						</div>
					:  
						<p></p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaMult);  