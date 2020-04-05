const getMarkets = (req, res) => {
  const markets = `
    [
      {
        "id": 0,
        "venueId": "4cf295398333224bd808118e",
        "title": "Weihnachtsmarkt am Chinesischen Turm",
        "position": {
          "lat": 48.151504,
          "lng": 11.5923763
        }
      },
      {
        "id": 1,
        "venueId": "4cefa70fb80da0939b7a2d00",
        "title": "Haidhauser Weihnachtsmarkt",
        "position": {
          "lat": 48.128568,
          "lng": 11.5961263
        }
      },
      {
        "id": 2,
        "venueId": "4b31473ef964a520c70325e3",
        "title": "Weihnachtsdorf im Kaiserhof der Residenz",
        "position": {
          "lat": 48.1414477,
          "lng": 11.5756429
        }
      },
      {
        "id": 3,
        "venueId": "4b1bbf57f964a5200bfd23e3",
        "title": "Mittelaltermarkt am Wittelsbacherplatz",
        "position": {
          "lat": 48.1436109,
          "lng": 11.5736273
        }
      },
      {
        "id": 4,
        "venueId": "4b113b6bf964a5201f7923e3",
        "title": "Christkindlmarkt am Marienplatz",
        "position": {
          "lat": 48.1370307,
          "lng": 11.5755901
        }
      },
      {
        "id": 5,
        "venueId": "4b0ea749f964a520575923e3",
        "title": "Christkindlmarkt am Sendlinger Tor",
        "position": {
          "lat": 48.1341002,
          "lng": 11.5654462
        }
      },
      {
        "id": 6,
        "venueId": "4b27cfb6f964a520638a24e3",
        "title": "Neuhauser Weihnachtsmarkt",
        "position": {
          "lat": 48.1524666,
          "lng": 11.5312431
        }
      }
    ]
  `;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(markets);
};

exports.getMarkets = getMarkets;
