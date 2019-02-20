import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
// eslint-disable-next-line 
import math from 'mathjs';
import './LinAlgOne.css';
//import {Bar} from 'react-chartjs-2';s
import Matrix from './Matrix/Matrix';
import AddMatrix from './AddMatrix/AddMatrix';
import {
	setCreateMatrix, 
	setAddMatrix
} from './State/actions';

const mapStateToProps = (state) => {
  	return {
   		row: state.createMatrix.row, 
   		col: state.createMatrix.col,
   		matrixArray1: state.createMatrix.matrixArray1, 
   		matrixArray2: state.createMatrix.matrixArray2,
 		addMatrix: state.createMatrix.addMatrix
	}
}

const mapDispatchToProps = (dispatch) => {
 	return {
		setCreateMatrix: (event) => dispatch(setCreateMatrix(document.getElementById('rows').value, document.getElementById('cols').value, event.target.id, event.target.value)),
		setAddMatrix: () => dispatch(setAddMatrix())
	}
}

class LinAlgOne extends React.Component {
	render() {
		return(
			<div>
				<div className="bg-black p2 matrixAddition">
					<h1 className="center">Matrix Addition </h1>
					<div>
						<div className="selection">
							<p>
								Enter Matrix Rows:<br/>
								<select id="rows" 
										className="matDim"
										onChange={this.props.setCreateMatrix}>
								 	<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
								</select>
							</p>
						</div>
						<div className="selection">
							<p>
								Enter Matrix Columns:<br/>
								<select id="cols" 
										className="matDim"
										onChange={this.props.setCreateMatrix}>
								 	<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
								</select>
							</p>
						</div>
					</div>
					{
						(this.props.col) ?
							<div>
								<div>
									<Matrix assignID={'mat1'} rows={this.props.row} cols={this.props.col} setCreateMatrix={this.props.setCreateMatrix} />
									<Matrix assignID={'mat2'} rows={this.props.row} cols={this.props.col} setCreateMatrix={this.props.setCreateMatrix} />
								</div>
								<div className="w-100" >
									<input  type="button"
									    className="db no-underline near-black bg-animate bg-near-white hover-bg-gray 
											       inline-flex items-center ma2 tc br2 pa2 submitButton"
									    value="Submit"
									    onClick={this.props.setAddMatrix}
									/>
								</div>
							</div>
						: 
							<p></p>
					}
					
					{
						(this.props.addMatrix) ? 
						<AddMatrix 
							matrix1={this.props.matrixArray1} 
							matrix2={this.props.matrixArray2}
						/>
						:
						(this.props.col) ?
						<p>Click submit to compute</p>
						: 
						<p>Select the size of the matrices</p>
					}
				</div>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinAlgOne); 




