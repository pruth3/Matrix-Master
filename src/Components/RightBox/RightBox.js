import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './RightBox.css';
import Home from './Subjects/Home/Home';
import MatAdd from './Subjects/MatAdd/MatAdd';
import ScaMult from './Subjects/ScaMult/ScaMult';
import InProd from './Subjects/InProd/InProd';
import Transpose from './Subjects/Transpose/Transpose';
import MatMult from './Subjects/MatMult/MatMult';
import RREF from './Subjects/RREF/RREF';
import LinMap from './Subjects/LinMap/LinMap';
import Inverse from './Subjects/Inverse/Inverse';
import Det from './Subjects/Det/Det';
import AreaPgram from './Subjects/AreaPgram/AreaPgram';
import AreaPiped from './Subjects/AreaPiped/AreaPiped';
import Expon from './Subjects/Expon/Expon';
import Diag from './Subjects/Diag/Diag';
import LeastSq from './Subjects/LeastSq/LeastSq'

const RightBox = ({page}) => {
	return(
		<div className="right w-80 bg-blue white b--lightest-blue br3">
			{
				(page === "MatAdd")? 		<MatAdd/> :
				(page === "ScaMult") ? 		<ScaMult/>:
				(page === "Transpose") ? 	<Transpose/>:
				(page === "MatMult") ? 		<MatMult/>:
				(page === "RREF") ? 		<RREF/>:
				(page === "LinMap") ? 		<LinMap/>:
				(page === "Inverse") ? 		<Inverse/>:
				(page === "Det") ? 			<Det/>:
				(page === "AreaPgram") ? 	<AreaPgram/>:
				(page === "AreaPiped") ? 	<AreaPiped/>:
				(page === "Diag") ? 		<Diag/>:
				(page === "Expon")?			<Expon/>:
				(page === "InProd") ? 		<InProd/>:
				(page === "LeastSq") ? 		<LeastSq/>:
				<Home/>
			}
       </div>
	);
}

export default RightBox;
