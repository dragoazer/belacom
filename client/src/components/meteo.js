import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
 
export default class Meteo extends Component {
	constructor (props) {
		super(props);
		this.coucou = "coucou";
		this.state = ({
			weather : 0
		});
		this.data = "";
	}
s
	/*getWeather (){
	 	var axios = require("axios").default;
		var options = {
		  method: 'GET',
		  url: 'https://api.ambeedata.com/weather/latest/by-lat-lng',
		  params: {lat: '12.9889055', lng: '77.574044'},
		  headers: {'x-api-key': '83824447dec9b36be4fe7b99f9891121bb4967ed09cf55d89fa56195ae0975a0', 'Content-type': 'application/json'}
		};
		axios.request(options).then((response) =>{
			console.log(response.data.data.apparentTemperature);
      			this.setState ({
      				weather: response.data.data.apparentTemperature,
    			});
		});
	}*/

	 componentDidMount() {
	 	 axios
      .get("http://localhost:5000/cityJson")
      .then((response) => {
        console.log(response);
        this.data = response;
      })
      .catch(function (error) {
        console.log(error);
      });
	 }

	CityListItem() {
		return this.data.map((france) =>{
				<tr>
				<td>{france.bretagne}</td>
				<td>{france.ile_de_france}</td>
				<tr>
			}
		)
	}


	render() {
    return (
    	<div>
    	<div style={{ marginTop: 20 }}>
    		<h3>this.coucou {this.coucou} </h3>
    		<p>test city</p>
    	</div>
    	
    	<div>
        <h3>Liste des villes</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Région</th>
              <th>Ville</th>
            </tr>
          </thead>
          <tbody>{this.data}</tbody>
        </table>
      </div>
      </div>
    );
	}

}
