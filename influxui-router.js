// Express imports
const express = require("express");
const app = express();
const port = 8886;

// returns current date and time
var time = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });

// Serve entire folder
app.use('/', express.static(__dirname + '/'));

// Start Server
app.listen(port, () => console.log(`[ ${time} : --+++=== INFLUXDB V.1.8 ===+++-- : http://localhost:${port} 🔥 ]`));