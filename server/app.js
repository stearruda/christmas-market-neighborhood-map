const http = require("http");
const url = require("url");
const mysql = require("mysql");

const { getRoute } = require("./getRoute");
const { processPageNotFound } = require("./routes/pageNotFound");
const { processStaticFiles } = require("./routes/processStatic");

const hostname = "127.0.0.1";
const port = 5000;

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "christmas_map",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected! Uhu! :)");
});

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  let routeFn;
  if (path.startsWith("/static/")) {
    routeFn = processStaticFiles;
  } else {
    routeFn = getRoute(req.method, path);
  }

  if (routeFn) {
    routeFn(req, res, con);
  } else {
    processPageNotFound(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
