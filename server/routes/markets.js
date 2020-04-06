class Market {
  constructor(id, venueId, title, lat, lon) {
    this.id = id;
    this.venueId = venueId;
    this.title = title;
    this.lat = lat;
    this.lon = lon;
  }

  toMarketListJSON() {
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

const getMarkets = (req, res) => {
  const markets = [
    new Market(
      0,
      "4cf295398333224bd808118e",
      "Weihnachtsmarkt am Chinesischen Turm",
      48.151504,
      11.5923763
    ),
    new Market(
      1,
      "4cefa70fb80da0939b7a2d00",
      "Haidhauser Weihnachtsmarkt",
      48.128568,
      11.5961263
    ),
    new Market(
      2,
      "4b31473ef964a520c70325e3",
      "Weihnachtsdorf im Kaiserhof der Residenz",
      48.1414477,
      11.5756429
    ),
    new Market(
      3,
      "4b1bbf57f964a5200bfd23e3",
      "Mittelaltermarkt am Wittelsbacherplatz",
      48.1436109,
      11.5736273
    ),
    new Market(
      4,
      "4b113b6bf964a5201f7923e3",
      "Christkindlmarkt am Marienplatz",
      48.1370307,
      11.5755901
    ),
    new Market(
      5,
      "4b0ea749f964a520575923e3",
      "Christkindlmarkt am Sendlinger Tor",
      48.1341002,
      11.5654462
    ),
    new Market(
      6,
      "4b27cfb6f964a520638a24e3",
      "Neuhauser Weihnachtsmarkt",
      48.1524666,
      11.5312431
    ),
  ];

  const marketsOutput = markets.map((market) => market.toMarketListJSON());

  const responseJSON = JSON.stringify(marketsOutput);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(responseJSON);
};

exports.getMarkets = getMarkets;
