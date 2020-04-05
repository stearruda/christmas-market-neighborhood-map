const fs = require("fs");
const url = require("url");

const processStaticFiles = (req, res) => {
  const path = url.parse(req.url, true).pathname;
  const internalFilePath = path.replace("/files/", "/");

  fs.readFile(`./static/${internalFilePath}`, (err, data) => {
    if (!err) {
      const fileExtensionPattern = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim;
      const extension = path.match(fileExtensionPattern)[0];

      const contentTypes = {
        ".jpg": "image/jpeg",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json"
      };
      console.log("extension", extension);

      const contentType = contentTypes[extension];
      if (contentType) {
        res.statusCode = 200;
        res.setHeader("Content-Type", contentType);
        res.write(data);
        res.end();
        return;
      }
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not found!");
    // throw err;
  });
};

exports.processStaticFiles = processStaticFiles;
