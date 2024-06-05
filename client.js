const coap = require('coap');

let req = coap.request({
  host: 'localhost',
  pathname: '/temperature',
  port: 5683,
  method: 'post',
  confirmable: true,
});

randTemp = parseFloat(`${Math.random() * 40}`).toFixed(2);

req.write(randTemp); // payload
req.end()

req.on('response', (res) => {
  //console.log(res);
  res.pipe(process.stdout)
})

