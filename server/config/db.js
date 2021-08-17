const mysql = require('mysql')
const db = mysql.createConnection({
host: "159.65.230.158",
user: "webadmin",
password: "03PeUQzpDhNL!",
database:"liftoff-react-app"
})

module.exports = db;