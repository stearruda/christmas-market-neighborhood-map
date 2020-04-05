const processMain = (req, res) => {
  const html = `
    <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <link rel="manifest" href="/files/manifest.json">
          <title>Christmas Market</title>
          <link href="/files/css/main.483e9a8f.css" rel="stylesheet">
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
          <script type="text/javascript" src="/files/js/main.a9eaec68.js"></script>
        </body>
      </html>
  `;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
};

exports.processMain = processMain;
