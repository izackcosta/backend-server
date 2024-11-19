const http = require('node:http');
const fs = require('fs');

// Create a local server to receive data from
const server = http.createServer((req,res)=>{

  let file = '';

  switch(req.url)
  {

    case '/':
      file = 'index.html';
      break;

    case '/about':
      file = 'about.html';
      break;

    case '/contact-me':
      file = 'contact-me.html';
      break;

    default:
      file = '404.html';
      break;

  };

  fs.readFile(`./${file}`, (err, data)=>{

    if(err == null)
    {

      const code = file == '404.html' ? 404 : 200;

      res.writeHead(code, {'Content-Type' : 'text/html'});
      res.end(data);

    }
    else console.log(err);

  });

});

server.listen(8080, ()=>{
  console.log('server listening on port 8080');
});