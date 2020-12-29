const {
  getMarkets,
  getMarket,
  createMarket,
  updateMarket,
  deleteMarket,
} = require("./markets");

const routesByMethod = {
  GET: [
    { url: /^\/api\/markets\/[0-9]+$/, fn: getMarket },
    { url: /^\/api\/markets$/, fn: getMarkets },
  ],
  POST: [{ url: /^\/api\/markets$/, fn: createMarket }],
  PUT: [{ url: /^\/api\/markets\/[0-9]+$/, fn: updateMarket }],
  DELETE: [{ url: /^\/api\/markets\/[0-9]+$/, fn: deleteMarket }],
};

exports.routesByMethod = routesByMethod;
