const express = require('express');
const { MongoClient } = require('mongodb');

const adminRouter = express.Router();

const books = [

  {
    author: 'Chinua Achebe',
    title: 'Sample Post 1',

  },
  {
    author: 'Hans Christian Andersen',
    title: 'Sample Post 2',
  },
  {
    author: 'Dante Alighieri',
    title: 'Sample Post 3',
  },
  {
    author: 'Steve Jobs',
    title: 'Sample Post 4',
  },
  {
    author: 'Andrew Flinttop',
    title: 'Sample Post 5',
  },
  {
    author: 'Chetan Bhagat',
    title: 'Sample Post 6',
  },
  {
    author: 'Jane Austen',
    title: 'Sample Post 7',
  },
  {
    author: 'Samuel Beckett',
    title: 'Sample Post 8',
  },
];

function router(nav) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017/';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          console.log('Connected to Server');

          const db = client.db(dbName);

          const response = await db.collection('books').insertMany(books);
          console.log(response);
          res.json(response);
        } catch (err) {
          console.log(err.stack);
        }

        client.close();
      }());
    });
  return adminRouter;
}

module.exports = router;
