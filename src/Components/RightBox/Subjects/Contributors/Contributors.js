import React from 'react';
import './Contributors.css'

const Contributors = () => {
	return(
		<div className="mainDiv">
			<footer className="footStyle tc-l bg-center cover bg-black">
				<div className="w-100 ph3 pv5 bg-black-80 blackShade">
					<h1 className="homeText">
				  		Contributors
				  	</h1>
				  	<a rel="noopener noreferrer" 
				  	   target="_blank" 
				  	   href="https://github.com/apanesar11"
				  	   className="githubLink">apanesar11</a>
				</div>
			</footer>
		</div>
	);
}

export default Contributors;