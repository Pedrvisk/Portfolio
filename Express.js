const express = require('express');
const next = require('next');

// Server: Next SSR
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
	server.get('*', (req, res) => {
		return handle(req, res);
	});

	// server.listen(3000, (err) => {
	//	 if (err) throw err
	//	 console.log('> Ready on http://localhost:3000')
	// });
}).catch((err) => {
	console.error(err.stack);
	process.exit(1);
});

module.exports = server;