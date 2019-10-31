import React from 'react';
import './Qr.css';
import {
	BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function SuccessPage() {
	return (
		<div className="welcome">
			<h1>BIENVENIDO</h1>
            <Link to="/">INICIO</Link>
		</div>
  	);
}