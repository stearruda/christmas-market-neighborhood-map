const { routesByMethod } = require("./routes/definitions");

const getRoute = (method, path) => {
  const routesForMethod = routesByMethod[method];
  const myRoute = routesForMethod.find((definition) =>
    path.match(definition.url)
  );

  return myRoute.fn;
};

exports.getRoute = getRoute;
