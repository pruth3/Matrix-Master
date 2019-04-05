import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './RightInfo.css';
import DotInfo from './Subjects/Dot/DotInfo/DotInfo';
import MatAddInfo from './Subjects/MatAdd/MatAddInfo/MatAddInfo';
import ScaMultInfo from './Subjects/ScaMult/ScaMultInfo/ScaMultInfo';
import TransposeInfo from './Subjects/Transpose/TransposeInfo/TransposeInfo';
import MatMultInfo from './Subjects/MatMult/MatMultInfo/MatMultInfo';
import MatSolveInfo from './Subjects/MatSolve/MatSolveInfo/MatSolveInfo';
import LinMapInfo from './Subjects/LinMap/LinMapInfo/LinMapInfo';
import InverseInfo from './Subjects/Inverse/InverseInfo/InverseInfo';
import DetInfo from './Subjects/Det/DetInfo/DetInfo';
import AreaPgramInfo from './Subjects/AreaPgram/AreaPgramInfo/AreaPgramInfo';
import ExponInfo from './Subjects/Expon/ExponInfo/ExponInfo';
import TraceInfo from './Subjects/Trace/TraceInfo/TraceInfo';
import CrossInfo from './Subjects/Cross/CrossInfo/CrossInfo';

const RightInfo = ({page}) => {
	if (page === 'Home' || page === 'Contributors') return null
	return(
		<div className="right bg-blue white b--lightest-blue br3">
			{
				(page === "MatAdd")?        <MatAddInfo/> :
				(page === "Dot")? 		    <DotInfo/> :
				(page === "ScaMult") ? 		<ScaMultInfo/>:
				(page === "Transpose") ? 	<TransposeInfo/>:
				(page === "MatMult") ? 		<MatMultInfo/>:
				(page === "MatSolve") ? 	<MatSolveInfo/>:
				(page === "LinMap") ? 		<LinMapInfo/>:
				(page === "Inverse") ? 		<InverseInfo/>:
				(page === "Det") ? 			<DetInfo/>:
				(page === "AreaPgram") ? 	<AreaPgramInfo/>:
				(page === "Expon")?			<ExponInfo/>:
				(page === "Trace")?			<TraceInfo/>:
				(page === "Cross")?			<CrossInfo/>:
				null
			}
	    </div>
	);
};


export default RightInfo;
