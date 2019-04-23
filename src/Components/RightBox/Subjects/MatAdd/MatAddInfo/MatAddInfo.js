import React from 'react';
import './MatAddInfo.css'
import MathJax from 'react-mathjax2'

const equation = `
A+B =
\\begin{bmatrix}
a_{11} & a_{12} &  \\dots & a_{1n} \\\\ 
a_{21} & a_{22} &  \\dots & a_{2n} \\\\ 
\\vdots & \\vdots & \\ddots & \\vdots \\\\
a_{m1} & a_{m2} &  \\dots & a_{mn}
\\end{bmatrix}
+
\\begin{bmatrix}
b_{11} & b_{12} &  \\dots & b_{1n} \\\\ 
b_{21} & b_{22} &  \\dots & b_{2n} \\\\ 
\\vdots & \\vdots & \\ddots & \\vdots \\\\ 
b_{m1} & b_{m2} &  \\dots & b_{mn}
\\end{bmatrix}
=
\\begin{bmatrix}
a_{11}+b_{11} & a_{12}+b_{12} &  \\dots & a_{1n}+b_{1n} \\\\ 
a_{21}+b_{21} & a_{22}+b_{22} &  \\dots & a_{2n}+b_{2n} \\\\ 
\\vdots & \\vdots & \\ddots & \vdots \\\\ 
a_{m1}+b_{m1} & a_{m2}+b_{m2} &  \\dots & a_{mn}+b_{mn}
\\end{bmatrix}
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