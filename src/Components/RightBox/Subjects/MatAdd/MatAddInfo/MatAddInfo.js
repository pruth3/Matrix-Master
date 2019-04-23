import React from 'react';
import './MatAddInfo.css'
import MathJax from 'react-mathjax2'

const equation = `
\\begin{array}{cc}
  a & b \\\\
  c & c
\\end{array}

`

const MatAddInfo = () => {
	return (
		<div className="bg-black p2 pushLeft">
			<p>Definition:</p>
			<p>Theorems: </p>
			<p>
				Algebraic Examples:
			</p>
			<span style={{textAlign: 'center'}}>
				<MathJax.Context input="tex">
					<div>
						<MathJax.Node>{equation}</MathJax.Node>
					</div>
				</MathJax.Context>
            </span>
		</div>
	);
}

export default MatAddInfo;