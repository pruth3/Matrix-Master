import React from 'react';
import MathJax from 'react-mathjax2'

const ascii = ''

const MatAddInfo = () => {
	return (
		<div className="bg-black p2 pushLeft">
			<p>Definition:</p>
			<p>Theorems: </p>
			<p>
				Algebraic Examples:
			</p>
			<span style={{textAlign: 'center'}}>
				<MathJax.Context input='ascii' >
	                <div>
	                    <MathJax.Node>{ascii}</MathJax.Node>
	                </div>
	            </MathJax.Context>
            </span>
		</div>
	);
}

export default MatAddInfo;