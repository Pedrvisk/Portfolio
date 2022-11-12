const Express = require('./Express');

// Greenlock: SSL/HTTPS Server
require('greenlock-express').init({
	packageRoot: __dirname,
	configDir: './greenlock',
	maintainerEmail: process.env.EMAIL,
	cluster: false
}).serve(Express);