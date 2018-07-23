
const bodyParser= require('body-parser')





const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
//process.env.PORT
app.listen(5000, function() {
console.log('listening on 5000')
})

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html')

// Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
// Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/subWord', (req, res) => {

var wordBox = []
var valueBox = []
var subWord


function letter_val(letter){
  var alphabetOnes = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
  
  var alphabetTens = ["j", "k", "l", "m", "n", "o", "p", "q", "r"]
  
  var alphabetHundreds=["s", "t", "u", "v", "w", "x", "y", "z"]

  
  for (var i = 0; i < alphabetOnes.length; i++){
    if(letter == alphabetOnes[i]){return(i+1)}
  }
  for (var i = 0; i < alphabetTens.length; i++){
    if(letter == alphabetTens[i]){return((i+1)*10)}
  }
  for (var i = 0; i < alphabetHundreds.length; i++){
    if(letter == alphabetHundreds[i]){return((i+1)*100)}
    }
  return 0
}



function wordVal(word){
  word = word.toLowerCase()
var counter =0


var wordray=word.split("")

for(var i = 0; i < wordray.length; i++){
  counter+=letter_val(wordray[i])
}

return(counter)}

subWord = req.body.myWord
var num = parseInt(wordVal(req.body.myWord))

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
 
db.each(sql, [num], (err, row) => {
  if (err) {
    throw err;
  }
  
 wordBox.push(`${row.word}`)
 
 

});
 






db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');

  //perhaps shouldn't be here
  res.render('index.ejs', {wordBox, subWord, num})

  });

})




