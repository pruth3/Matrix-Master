import React from 'react';
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './ScaMult.css'
import Matrix from '../../Reusable/Matrix/Matrix';
import MatrixSelect from '../../Reusable/MatrixSelect/MatrixSelect';
import CalculateButton from '../../Reusable/CalculateButton/CalculateButton';
import {
	setCreateSM,
	setScaMultMatrix // todo: import setChangeMatrixSM and get everything to work!
} from './State/actions';

const mapStateToProps = (state) => { 
  	return {
  		ScaMultRows: state.createMatrix.ScaMultRows, 
  		ScaMultCols: state.createMatrix.ScaMultCols, 
  		ScaMultMatrix: state.createMatrix.ScaMultMatrix, 
	}
}

const mapDispatchToProps = (dispatch) => { 
 	return {
 		setCreateSM: (event) => dispatch(
 			setCreateSM(
 				document.getElementById('RowsSM').value, 
 				document.getElementById('ColsSM').value
 			)
 		),
 		setScaMultMatrix: () => dispatch(
 			setScaMultMatrix()
 		)
	}
}

class ScaMult extends React.Component {
	render() {
		const {ScaMultRows, ScaMultCols, setCreateSM, ScaMultMatrix, setScaMultMatrix, setChangeMatrixSM} = this.props;
		return(
			<div className="bg-black p2">
				<h1 className="center">Scalar Multiplication</h1>
				<div> 
					<MatrixSelect	setId={"RowsSM"}  setCreateMatrix={setCreateSM} />
					<MatrixSelect	setId={"ColsSM"}  setCreateMatrix={setCreateSM} />
				</div>
				{ 
					(ScaMultCols) ?
						<div> 
							<div>
								<Matrix assignID={'mat3'} rows={ScaMultRows} cols={ScaMultCols} setChangeMatrix={setChangeMatrixSM}/>
							</div>
							<CalculateButton setAddMatrix={setScaMultMatrix} />
						</div>
					:  
						<p></p>
				}
				{
					(ScaMultMatrix) ? 
						<p>Show solution here</p>
					:(ScaMultRows) ?
						<p>Click submit to compute</p>
					: 
						<p>Select the size of the matrices</p>
				}
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaMult);  













