import React from 'react'; 
//eslint-disable-next-line
import tachyons from 'tachyons';
import './LinAlgOne.css';
//import math from 'mathjs';

const LinAlgOne = () => {
	return(
		<div>
			<p>LinAlgOne</p>
			<form className="matBorder black-80">
				<table>
					<tr>
						<td> <input className="matBox"/> </td>
						<td> <input className="matBox"/> </td>
						<td> <input className="matBox"/> </td>
					</tr>
					<tr>
						<td> <input className="matBox"/> </td>
						<td> <input className="matBox"/> </td>
						<td> <input className="matBox"/> </td>
					</tr>
					<tr>
						<td> <input className="matBox"/> </td>
						<td> <input className="matBox"/> </td>
						<td> <input className="matBox"/> </td>
					</tr>
				</table>
			</form>
		</div> 
	); 
}

export default LinAlgOne; 