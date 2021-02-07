import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./containers/auth/signIn";
import SignUp from "./containers/auth/signUp";
import Home from "./containers/home/index";
import jobs from "./containers/home/jobs";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/signIn" component={SignIn} />
				<Route exact path="/signUp" component={SignUp} />
				<Route exact path="/jobs" component={jobs} />
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
