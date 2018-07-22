import datetime
begintime = datetime.datetime.now()



def letter_val(letter):
  letter = letter.lower()
  alphabetOnes = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
  
  alphabetTens = ["j", "k", "l", "m", "n", "o", "p", "q", "r"]
  
  alphabetHundreds=["s", "t", "u", "v", "w", "x", "y", "z"]

  
  for i in range(0, len(alphabetOnes)):
    if letter == alphabetOnes[i]:
      return(i+1)
  
  for i in range(0, len(alphabetTens)):
    if letter == alphabetTens[i]:
      return((i+1)*10)
 
  for i in range(0, len(alphabetHundreds)):
    if letter == alphabetHundreds[i]:
      return((i+1)*100)
 
  
  return 0


def wordVal(word):
  word = word.lower()
  counter =0
  wordray = list(word)

  for i in range(0, len(wordray)):
    counter+=letter_val(wordray[i])


  return(counter)










f = open("words1.txt","r") #opens file with name of "words1.txt"

myList = []
for line in f:
  homer = line.rstrip()
  #if homer.isalpha() == False:
  myList.append(homer)
f.close()	


import sqlite3
conn = sqlite3.connect('test.db')
c = conn.cursor()
c.execute('''CREATE TABLE words (word, numvalue)''')


for i in range(0, len(myList)):
	word = myList[i]
	value = wordVal(word)
	
	c.execute("INSERT INTO words VALUES (?, ?);", (word, value))

# Save (commit) the changes
conn.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
conn.close()


endtime = datetime.datetime.now()

print(endtime - begintime)