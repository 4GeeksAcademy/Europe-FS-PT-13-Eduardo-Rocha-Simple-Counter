import React from "react";
import Timer from "./timer.jsx";
import StopWatch from "./component/stopwatch";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">This is the sconds counter</h1>
			<Timer />
			<alert>This is the stopwatch</alert>
			<StopWatch />
		</div>
	);
};

export default Home;
