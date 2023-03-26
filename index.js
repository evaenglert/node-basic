const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('request made');

  res.setHeader('Content-Type', 'text/html');

  let file_to_return = "";

  if (req.url == "/") {
    file_to_return = "./index.html"
  } else if (req.url == "/about") {
    file_to_return = "./about.html"
  } else if (req.url == "/contact-me") {
    file_to_return = "./contact-me.html"
  } else {
    file_to_return = "./404.html"
  }


  fs.readFile(file_to_return, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  })

  }
);

server.listen(8080, 'localhost', () => {
  console.log('listening for requests on port 8080')
})
