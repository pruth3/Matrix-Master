import React from 'react'; 

const InfoPage = ({page}) => {
	return(
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
	)
}