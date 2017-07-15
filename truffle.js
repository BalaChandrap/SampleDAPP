module.exports = {
  build: {
    "index.html": "index.html",
	  "store.html": "store.html",
    "patient.html": "Patient.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
