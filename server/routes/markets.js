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
    console.log(requestObject);

    const sql = `INSERT INTO markets(foursquare_venue_id,title,lat,lon) 
                  VALUES('${foursquareVenueId}','${title}',${lat},${lon})`;

    console.log("sql", sql);

    con.query(sql, function (err, result, fields) {
      if (err) throw err;

      res.statusCode = 204;
      res.setHeader("Content-Type", "application/json");
      res.end('{"title": "New Market"}');
    });
  });
};

exports.getMarkets = getMarkets;
exports.createMarket = createMarket;
