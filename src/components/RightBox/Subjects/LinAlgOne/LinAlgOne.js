import React from 'react'; 
import {connect} from 'react-redux';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './LinAlgOne.css';
//import {Bar} from 'react-chartjs-2';
import {
	createMatrix
} from '..../State/actions';

const mapStateToProps = (state) => {
  return {
    
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    
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
								Enter Matrix Rows:<br/><input className="matDim"/>
							</p>
						</div>
						<div className="selection">
							<p>
								Enter Matrix Columns:<br/><input className="matDim"/>
							</p>
						</div>
					</div>
					<input type="button"
						   className="db no-underline near-black bg-animate bg-near-white hover-bg-gray 
								       inline-flex items-center ma2 tc br2 pa2 submitButton"
						   value="Submit"/>
				</div>
			</div> 
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinAlgOne); 


// <form className="matBorder black-80">
// 	<table>
// 		<tr>
// 			<td> <input className="matBox"/> </td>
// 			<td> <input className="matBox"/> </td>
// 			<td> <input className="matBox"/> </td>
// 		</tr>
// 		<tr>
// 			<td> <input className="matBox"/> </td>
// 			<td> <input className="matBox"/> </td>
// 			<td> <input className="matBox"/> </td>
// 		</tr>
// 		<tr>
// 			<td> <input className="matBox"/> </td>
// 			<td> <input className="matBox"/> </td>
// 			<td> <input className="matBox"/> </td>
// 		</tr>
// 	</table>
// </form>
