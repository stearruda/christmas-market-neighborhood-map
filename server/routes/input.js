const processInputChange = (req, res) => {
  const html = `
    <body>
      <form action='/time' method='GET'>
        <input type='text' name='username' placeholder='Type your name'/>
        <input type='text' name='age' placeholder='Type your age'/>
        <button type='submit'>Send</button>
      </form>
    </body>
  `;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
};

exports.processInputChange = processInputChange;
