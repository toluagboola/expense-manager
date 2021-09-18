import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import App from "../App";

const Router = () => {
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</BrowserRouter>;
};

export default Router;
