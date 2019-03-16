import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './SolVector.css';

const SolVector = ({rows}) => {

	const items = (rows) => {
		let tr=[];
		for (var i=0; i < rows; ++i) {
			tr.push(
				<tr>
					<td>
						x{i}
					</td>
				</tr>
			)
		}
		return tr;
	}


	return(
		<form className="black-80">
			<table className="matBorder">
				{items(rows)}
			</table>
		</form>
	);
}

export default SolVector;