import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import math from 'mathjs';
import './LinAlgOne.css';
//import {Bar} from 'react-chartjs-2';s
import Matrix from './Matrix/Matrix'
import {
	setCreateMatrix
} from './State/actions';

const mapStateToProps = (state) => {
  	return {
   		row: state.createMatrix.row, 
   		col: state.createMatrix.col,
   		matrixArray: state.createMatrix.matrixArray
	}
} 

const mapDispatchToProps = (dispatch) => {
 	return {
		setCreateMatrix: (event) => dispatch(setCreateMatrix(document.getElementById('rows').value, document.getElementById('cols').value, event.target.id, event.target.value))
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
								</select>
							</p>
						</div>
					</div>
					{
					(!this.props.col) ?
						<div>
							<Matrix assignID={'mat1'} rows={1} cols={1} setCreateMatrix={this.props.setCreateMatrix}/>
						</div> 
					:
						<div>
							<Matrix assignID={'mat1'} rows={this.props.row} cols={this.props.col} setCreateMatrix={this.props.setCreateMatrix} />
						</div>
					}
					<div className="w-100" >
							<input  type="button"
							    className="db no-underline near-black bg-animate bg-near-white hover-bg-gray 
									       inline-flex items-center ma2 tc br2 pa2 submitButton"
							    value="Submit"
							    onClick={this.props.setAddMatrix}
							   />
						   </div>
				</div>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinAlgOne); 

//<Matrix assignID={'mat2'} rows={1} cols={1} setCreateMatrix={this.props.setCreateMatrix} />
//<Matrix assignID={'mat2'} rows={this.props.row} cols={this.props.col} setCreateMatrix={this.props.setCreateMatrix} />
