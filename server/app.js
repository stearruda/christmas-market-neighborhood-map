const http = require("http");
const url = require("url");

const { processInputChange } = require("./routes/input");
const { getMarkets } = require("./routes/markets");
const { processPageNotFound } = require("./routes/pageNotFound");
const { processStaticFiles } = require("./routes/processStatic");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  console.log(path);

  let routeFn;
  if (path.startsWith("/static/")) {
    routeFn = processStaticFiles;
  } else {
    const routes = {
      "/input": processInputChange,
      "/markets": getMarkets
    };
    routeFn = routes[path];
  }

  if (routeFn) {
    routeFn(req, res);
  } else {
    processPageNotFound(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
