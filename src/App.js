import React from "react";
import Nav from "./Nav";
import Body from "./Body";

import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Hero from "./Assets/hero.svg";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
			</BrowserRouter>
			<Body />
			<Footer />
		</div>
	);
}

export default App;
