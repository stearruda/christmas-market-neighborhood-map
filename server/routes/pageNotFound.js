const processPageNotFound = (req, res) => {
  const html = `
    <body>
      <img
        width='300px'
        height='auto'
        src='/files/img/not-today-covid19-sign-on-wooden-stool-3952231.jpg'
      />
      <script src='/files/js/batata.js'></script>
    </body>
  `;
  // const html = `<body><p style='color:red'>Page not found</p></body>`;
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
};

exports.processPageNotFound = processPageNotFound;
