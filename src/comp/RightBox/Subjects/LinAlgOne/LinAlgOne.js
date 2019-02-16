import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './LinAlgOne.css';
//import {Bar} from 'react-chartjs-2';s
import Matrix from './Matrix/Matrix'
import {
	setCreateMatrix
} from './State/actions';

const mapStateToProps = (state) => {
	console.log('state => props')
  	return {
   		dim: state.createMatrix.dim
	}
} 

const mapDispatchToProps = (dispatch) => {
	console.log("dispatch => props")
 	return {
		setCreateMatrix: (event) => dispatch(setCreateMatrix(document.getElementById('rows').value, document.getElementById('cols').value))
	}
}

class LinAlgOne extends React.Component {
	render() {
		console.log('render', this.props.dim)
		return(
			<div>
				<div className="bg-black p2 matrixAddition">
					<h1 className="center">Matrix Addition </h1>
					<div>
						<div className="selection">
							<p>
								Enter Matrix Rows:<br/>
								<select id="rows" className="matDim">
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
								<select id="cols" className="matDim">
								 	<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</p>
						</div>
					</div>
					<input  type="button"
						    className="db no-underline near-black bg-animate bg-near-white hover-bg-gray 
								       inline-flex items-center ma2 tc br2 pa2 submitButton"
						    value="Submit"
						    onClick={this.props.setCreateMatrix}
						   />
					{
					(this.props.dim) ? 
					<div>
						<Matrix rows={this.props.dim[0]} cols={this.props.dim[1]} />
						<Matrix rows={this.props.dim[0]} cols={this.props.dim[1]} />
					</div>:
					<p>Click submit to get matrices</p>
					}
				</div>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinAlgOne); 


