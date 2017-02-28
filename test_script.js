const pg = require("pg");
const settings = require("./settings");
const query = process.argv.slice(2)[0];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  if (!query) {
    client.end();
    return console.log('please enter a ship ID');
  }
  client.query("SELECT ships.id, ships.name AS ship, fleets.name AS fleet, date_commissioned FROM ships RIGHT JOIN fleets ON ships.fleet_id = fleets.id WHERE ships.id = $1", [query], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    console.log(`${result.rows[0].id} >> The <${result.rows[0].ship}> was commissioned by the ${result.rows[0].fleet} on ${result.rows[0].date_commissioned}`); //output: 1
    client.end();
  });
});