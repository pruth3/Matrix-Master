import React from 'react';
import Home from './Subjects/Home/Home';
import Dot from './Subjects/Dot/Dot';
import MatAdd from './Subjects/MatAdd/MatAdd';
import ScaMult from './Subjects/ScaMult/ScaMult';
import Transpose from './Subjects/Transpose/Transpose';
import MatMult from './Subjects/MatMult/MatMult';
import MatSolve from './Subjects/MatSolve/MatSolve';
import LinMap from './Subjects/LinMap/LinMap';
import Inverse from './Subjects/Inverse/Inverse';
import Det from './Subjects/Det/Det';
import AreaPgram from './Subjects/AreaPgram/AreaPgram';
import Expon from './Subjects/Expon/Expon';
import Trace from './Subjects/Trace/Trace';
import Cross from './Subjects/Cross/Cross';
import Contributors from './Subjects/Contributors/Contributors';


const RightBox = ({page}) => {
	return(
		<div className="right bg-blue white b--lightest-blue br3">
			{
				(page === "MatAdd")?		<MatAdd/>:
				(page === "Dot")? 		    <Dot/>:
				(page === "ScaMult") ? 		<ScaMult/>:
				(page === "Transpose") ? 	<Transpose/>:
				(page === "MatMult") ? 		<MatMult/>:
				(page === "MatSolve") ? 	<MatSolve/>:
				(page === "LinMap") ? 		<LinMap/>:
				(page === "Inverse") ? 		<Inverse/>:
				(page === "Det") ? 			<Det/>:
				(page === "AreaPgram") ? 	<AreaPgram/>:
				(page === "Expon")?			<Expon/>:
				(page === "Trace")?			<Trace/>:
				(page === "Cross")?			<Cross/>:
				(page === "Contributors") ? <Contributors/>:
				<Home/>
			}
       </div>
	);
};

export default RightBox;
