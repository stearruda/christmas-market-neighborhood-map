const url = require("url");

class Market {
  constructor(id, venueId, title, lat, lon) {
    this.id = id;
    this.venueId = venueId;
    this.title = title;
    this.lat = lat;
    this.lon = lon;
  }

  toOutputJSON() {
    return {
      id: this.id,
      venueId: this.venueId,
      title: this.title,
      position: {
        lat: this.lat,
        lng: this.lon,
      },
    };
  }
}

const getMarkets = (req, res, con) => {
  con.query("SELECT * FROM markets", function (err, result, fields) {
    if (err) throw err;

    const markets = result.map((item) => {
      return new Market(
        item.id,
        item.foursquare_venue_id,
        item.title,
        item.lat,
        item.lon
      );
    });

    const marketsOutput = markets.map((market) => market.toOutputJSON());

    const responseJSON = JSON.stringify(marketsOutput);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(responseJSON);
  });
};

const createMarket = (req, res, con) => {
  var jsonString = "";

  req.on("data", function (data) {
    jsonString += data;
  });

  req.on("end", function () {
    const requestObject = JSON.parse(jsonString);
    const { foursquareVenueId, title, lat, lon } = requestObject;
    const sql = `INSERT INTO markets(foursquare_venue_id,title,lat,lon) 
                  VALUES('${foursquareVenueId}','${title}',${lat},${lon})`;

    con.query(sql, function (err, result, fields) {
      if (err) throw err;

      res.statusCode = 204;
      res.setHeader("Content-Type", "application/json");
      res.end('{"title": "New Market"}');
    });
  });
};

const updateMarket = (req, res, con) => {
  var jsonString = "";

  req.on("data", function (data) {
    jsonString += data;
  });

  req.on("end", function () {
    const requestObject = JSON.parse(jsonString);
    const { foursquareVenueId, title, lat, lon } = requestObject;

    const path = url.parse(req.url, true).pathname;
    const params = path.substring(9);

    const sql = `UPDATE markets 
                  SET foursquare_venue_id = '${foursquareVenueId}', title = '${title}', lat = '${lat}', lon = '${lon}'
                  WHERE id = ${params}`;

    con.query(sql, function (err, result) {
      if (err) throw err;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end("Market Updated");
    });
  });
};

const deleteMarket = (req, res, con) => {
  const path = url.parse(req.url, true).pathname;
  const params = path.substring(9);
  const sql = `DELETE FROM markets WHERE id = ${params}`;

  con.query(sql, function (err, result) {
    if (err) throw err;

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Market Deleted");
  });
};

exports.getMarkets = getMarkets;
exports.createMarket = createMarket;
exports.updateMarket = updateMarket;
exports.deleteMarket = deleteMarket;
