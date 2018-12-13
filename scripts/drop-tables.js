const client = require('../lib/db-client');

client.query(`
  DROP TABLE IF EXISTS game;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });