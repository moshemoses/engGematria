const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('test.db', sqlite3.OPEN_READWRITE, (err)=>{
	if (err) {
		return console.error(err.message);
	}
	console.log('conectd to the in-memory sqlite database.');
});



let sql = `SELECT word word
           FROM words
            WHERE numvalue = ?
            ORDER BY word`;
 
db.each(sql, [666], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.word}`);
});







db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});