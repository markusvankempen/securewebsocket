// mvk@ca.ibm.com - secure websocket test
var server = require('http').createServer()
https = require('https')
  , url = require('url')
  , fs = require('fs')
  , WebSocketServer = require('ws').Server
  , WebSocketClient = require('ws').Client
  , wss = new WebSocketServer({ server: server })
  , express = require('express')
  , app = express()
  , port = 25600;

  var WebSocket = require('ws');

      var secureOptions = {
         passphrase: "youpassword",
         pfx: fs.readFileSync('your.p12'),
         ca : [fs.readFileSync('crt.pem')],
         protocolVersion: 8,
         origin: 'https://lrsc.ch:25601/'
        // rejectUnauthorized: false
     };

       v
//       var httpsServer = https.createServer(credentials, app);
//       httpsServer.listen(port, function () { console.log('httpS Listening on ' + httpsServer.address().port)
// client Connection

      console.log("Connecting to - wss://yoursrv.ca:25601/JSON/")
      var client = new WebSocket("wss://yoursrv.ca:25601/JSON/", secureOptions);

/*
       var ws = new WebSocket('wss://yoursrv.ca:25601/JSON'
       , {
         protocolVersion: 8,
         origin: 'https://yoursrv.ca:25601/'
      //   rejectUnauthorized: false
       });
*/
       client.on('open', function open() {
         console.log("Connection open");
      //   ws.send('hello');
       });

       client.on('message', function(data, flags) {
         console.log("Got something");
         console.log(data);
       console.log(flags);
       });


      client.on('error', function(data) {
                console.log("ERROR >>"+data);
                console.log(data);

              });



  app.use(function (req, res) {
    res.send({ msg: "hello - from local http server " });
  });
