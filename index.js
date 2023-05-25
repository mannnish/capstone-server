const fs = require('node:fs/promises');
const express = require('express');
const app = express();

app.get('/strain', async function (req, res) {
  let dummyData;
  for (let i = 0; i < 5000; i++) {
    dummyData = await fs.readFile('data.json');
  }
  const json = JSON.parse(dummyData);
  res.json({ message: 'Success!', data: json });
});

app.get('/v', (req, res)=>{
  res.send( { 
      version : '1.0.0', 
      root : __dirname
    })
})

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname })
});

app.listen(3000);