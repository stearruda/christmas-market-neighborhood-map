const url = require("url");

const processTime = (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const { username, age } = queryObject;

  const timeNow = Date().toString();

  const html = `<body><p style='color:blue'>Hi ${username} | ${age} years old! Today is ${timeNow}</p></body>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
};

exports.processTime = processTime;
