import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
 
export default class Meteo extends Component {
	constructor (props) {
		super(props);
		this.coucou = "coucou";
	}

	getWeather (){
	 	var axios = require("axios").default;
		var options = {
		  method: 'GET',
		  url: 'https://api.ambeedata.com/weather/latest/by-lat-lng',
		  params: {lat: '12.9889055', lng: '77.574044'},
		  headers: {'x-api-key': '83824447dec9b36be4fe7b99f9891121bb4967ed09cf55d89fa56195ae0975a0', 'Content-type': 'application/json'}
		};
		axios.request(options).then((response) =>{
			//console.log(response.data.data.apparentTemperature);
			return response.data.data.apparentTemperature;
		});
	}

	render(props) {
    	return (
    		<div style={{ marginTop: 20 }}>
    			<h3>this.coucou {this.coucou} </h3>
    			<p>fdfd {this.getWeather()}</p>
    			<h1>{this.weather}</h1>
    		</div>
    	);
	}
}
