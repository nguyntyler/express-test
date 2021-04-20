const http = require("http");
const express = require("express");
const { readFile } = require("fs");

const app = express();
// const server = http.createServer(app);
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
	readFile("./index.html", "utf8", (err, html) => {
		res.send(html);
	});
});

// app.get("/hello", (req, res) => {
// 	res.send("hello, you");
// });

// app.get("/hello/:hello", (req, res) => {
// 	const hello = req.params.hello;
// 	res.send(`hello ${hello}`);
// });

// app.post("/getinfo", (req, res) => {
// 	const { first, last, email, age } = req.body;
// 	res.send(`${first} ${last}. Email: ${email}. Age: ${age}`);
// });

app.listen(port, () => {
	console.log("listening on port", port);
});
