
const express = require('express');
const app = express();
const fetch = require('node-fetch');

const url = 'https://api.pactsafe.com/v1.1/sites/16489/signers/id:alvin.cheng%40ironcladapp.com/activity?expand=contract,version&filter=event_type==agreed';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer kH7qqXGW5kt5XFoX59fI0CH8WnkTLbrlGDdiX9G-Ut8_'
  }
};

const port = process.env.PORT || 80

app.use(express.static('public'));

var obj;

fetch(url, options)
      .then(res => res.json())
      .then(data => obj = data)
      .then(json => console.log(obj))
      .catch(err => console.error('error:' + err));

app.get('/api', (request, response) => {
  response.json({ obj });
});



