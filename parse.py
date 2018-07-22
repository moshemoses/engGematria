f = open("words.txt","r") #opens file with name of "test.txt"

myList = []
for line in f:
  homer = line.rstrip()
  myList.append("'" + homer +"', ")
f.close()	



  

new = open("newlist.txt", "w")

for i in myList:
  
  new.write(i)
  

new.close()