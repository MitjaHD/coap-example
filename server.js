const coap = require('coap');
const server = coap.createServer();

server.on('request', (req, res) => {
  if (req.method == 'POST' && req.url == '/temperature') {
    const temperature = req.payload.toString();
    //console.log(req);
    console.log(`Prejeta temperatura iz POST zahtevka: ${temperature}`);
  }

  res.statusCode = '2.01';  // Created
  res.end('Nova temperatura dodana!');
});

// Privzeti port 5683
server.listen();

