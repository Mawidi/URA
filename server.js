const express = require('express');
const mongoose = require('mongoose'); // Add mongoose import
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// MongoDB connection URL and database name
const url = 'mongodb+srv://nathan:NA3108tha..@cluster0.21pluz0.mongodb.net/URA?retryWrites=true&w=majority'; // Add your MongoDB connection URL
const dbName = 'URA'; // Add your MongoDB database name 

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  const asset = {
    assetName: req.body.assetName,
    estimatedCost: parseFloat(req.body.estimatedCost),
    tin: req.body.tin,
    type: req.body.type,
    assetNumber: req.body.assetNumber,
  };

  // Connect to MongoDB and insert the asset
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const db = client.db(dbName);
    const assetsCollection = db.collection('assets');

    assetsCollection.insertOne(asset, (err, result) => {
      if (err) {
        console.error('Error inserting asset into MongoDB:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      console.log('Asset inserted:', result.ops[0]);
      res.send('Asset registered successfully!');
      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
