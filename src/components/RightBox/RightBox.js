import React from 'react';
//eslint-disable-next-line
import tachyons from 'tachyons';
import './RightBox.css';
import Home from './Subjects/Home/Home';
import AboutUs from './Subjects/AboutUs/AboutUs';
import CalcOne from './Subjects/CalcOne/CalcOne';
import CalcTwo from './Subjects/CalcTwo/CalcTwo';
import CalcThree from './Subjects/CalcThree/CalcThree';
import CalcFour from './Subjects/CalcFour/CalcFour';
import Electricity from './Subjects/Electricity/Electricity';
import LinAlgOne from './Subjects/LinAlgOne/LinAlgOne';
import LinAlgTwo from './Subjects/LinAlgTwo/LinAlgTwo';
import Mechanics from './Subjects/Mechanics/Mechanics';
import Modern from './Subjects/Modern/Modern';
import Programming from './Subjects/Programming/Programming';
import Contact from './Subjects/Contact/Contact';
import Stats from './Subjects/Stats/Stats';

const RightBox = ({page}) => {
	return(
		<div className="right w-80 bg-blue white b--lightest-blue br3">
			{
				(page === "Home") ? 
					<Home/>
				:
				(page === "AboutUs") ? 
					<AboutUs/>
				:
				(page === "CalcOne") ? 
					<CalcOne/>
				:
				(page === "CalcTwo") ? 
					<CalcTwo/>
				:
				(page === "CalcThree") ? 
					<CalcThree/>
				:
				(page === "CalcFour") ? 
					<CalcFour/>
				:
				(page === "Electricity") ? 
					<Electricity/>
				:
				(page === "LinAlgOne") ? 
					<LinAlgOne/>
				:
				(page === "LinAlgTwo") ? 
					<LinAlgTwo/>
				:
				(page === "Mechanics") ? 
					<Mechanics/>
				:
				(page === "Modern") ? 
					<Modern/>
				:
				(page === "Programming") ? 
					<Programming/>
				:
				(page === "Stats") ? 
					<Stats/>
				:
				<Contact/>
			}
       </div>
	);
}

export default RightBox;
