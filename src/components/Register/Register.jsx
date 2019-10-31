import React from 'react';
import './Register.css';
import {
	BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Register() {
	return (
		<div className="visitorsForm">
			<div className="inputRow">
				<label for="name">Nombre</label>
				<input type="text" name="name" id="name" required/>
			</div>
			<div className="inputRow">
				<label for="visitorMail">Correo Electrónico</label>
				<input type="text" name="visitorMail" id="visitorMail" required/>
			</div>
			<div className="inputRow">
				<label for="who">¿A quién visitas?</label>
				<input type="text" name="who" id="who" required/>
			</div>
			<div className="inputRow">
				<label for="visitAbout">Asunto</label>
				<input type="text" name="visitAbout" id="visitAbout" required/>
			</div>
			<button className="buttonRegisterVisitor"type="button">REGISTRAR</button>
		</div>
  	);
}