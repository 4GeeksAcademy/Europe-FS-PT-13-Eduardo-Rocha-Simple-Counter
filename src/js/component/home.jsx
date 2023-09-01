import React from "react";
import StopWatch from "./stopwatch.jsx";


//create your first component
const Home = () => {
	return (
		<div className="App text-center">
			<h1 className="text-center mt-5">This is the sconds counter</h1>
			<StopWatch />
		</div>
	);
};

export default Home;
