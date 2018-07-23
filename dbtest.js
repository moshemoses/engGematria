const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('test.db', sqlite3.OPEN_READWRITE, (err)=>{
	if (err) {
		return console.error(err.message);
	}
	console.log('conectd to the in-memory sqlite database.');
});




let languages = ['C++', 'Python'] 
 
// construct the insert statement with multiple placeholders
// based on the number of rows

let sql = 'INSERT INTO queries(input, date) VALUES (?, ?)';
 
// output the INSERT statement
console.log(sql);
 
db.run(sql, languages, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows inserted ${this.changes}`);
});
 
// close the database connection
db.close();


/*
var insertings = "flamingo guts"
var TBSaved = Date.now()



const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('test.db', sqlite3.OPEN_READWRITE, (err)=>{
	if (err) {
		return console.error(err.message);
	}
	console.log('conectd to the in-memory sqlite database.');
});





let sql1 = 'INSERT INTO queries(input, date) VALUES(?)(?)';
 
// output the INSERT statement
console.log(sql1);
 
db.run(sql1, [insertings, TBSaved], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows inserted ${this.changes}`);
});


db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');



  });
*/