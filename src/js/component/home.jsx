import React from "react";
import Stopwatch from "./stopwatch.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">This is the sconds counter</h1>
			

			<h1>This is the stopwatch</h1>
			<Stopwatch />
		</div>
	);
};

export default Home;
