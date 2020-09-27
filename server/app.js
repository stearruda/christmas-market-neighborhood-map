const http = require("http");
const url = require("url");
const mysql = require("mysql");

const { processInputChange } = require("./routes/input");
const { getMarkets, createMarket, deleteMarket } = require("./routes/markets");
const { processPageNotFound } = require("./routes/pageNotFound");
const { processStaticFiles } = require("./routes/processStatic");

const hostname = "127.0.0.1";
const port = 3000;

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
    const routes = {
      "GET-/input": processInputChange,
      "GET-/markets": getMarkets,
      "POST-/markets": createMarket,
      "DELETE-/markets": deleteMarket,
    };
    const resourceGroup = path.match(/(\/[^\/]*)/)[1];
    const routeKey = `${req.method}-${resourceGroup}`;
    routeFn = routes[routeKey];
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
