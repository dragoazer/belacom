const express = require("express");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
const recordRoutes = express.Router();

recordRoutes.route("/cityJson").get(function (req, res) {
  let data = {
  	"france" : {
	  		"ile_de_france": {
	      		0: "Paris",
	      		1: "Provins"
	  		},
	  		"bretagne" : {
	      		0: "Brest",
	      		1: "Nante"
	  		}
      }
    };

  res.json(data);
});

module.exports = recordRoutes;