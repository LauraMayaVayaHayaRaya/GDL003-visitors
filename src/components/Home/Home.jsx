import React from 'react';
import {
	BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() {
	return (
    <div>
      <header className="App-header">
				<h1>I´M IN</h1>
			</header>
			<section className= "App-body">
				<nav className="menuButtons">
					<Link to="/scan">SOY MIEMBRO DEL PLANTEL</Link>
					<Link to="/register">SOY VISITANTE</Link>
					<Link to="/checkout">SALIDA</Link>
				</nav>
			</section>
    </div>
    );
}
