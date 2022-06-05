const express = require('express')
const app = express()
const  PORT = 8000

const frozen = {
"elsa": {
    "name": "Elsa of Arendelle",
    "voiced" : "Idina Menzel",
      "age": "24 years",
      "birthdate": "Winter Solstice (December 21–22)",
      "nationality": "Kingdom of Arendelle",
      "gender": "Female",
      "species": "Immortal Goddess",
      "character": "Dutiful, humble and extemely poised to a fault. Hid her emotions, bottling up anger due to insecurity hence her  frequent moody disposition ",
      "quotes": "Be the good girl you always have to be"

},
"olaf": {
    "name": "Olaf",
    "voiced" : "Josh Gad",
      "age": "3 years",
      "birthdate": "Winter Solstice (December 16)",
      "nationality": "Kingdom of Arendelle",
      "gender": "Male",
      "species" : "Snowman",
      "character": "Nicest snowman in Arendelle, great at charades, enjoys stargazing and dancing",
      "quotes": "Some People Are Worth Melting For."
},
"anna": {
    "name": "Anna of Arendelle",
    "voiced" : "Kristen Bell",
      "age": "21 years",
      "birthdate": "Summer Solstice (June 20–21)",
      "nationality": "Kingdom of Arendelle",
      "gender": "Female",
      "species" : "Snowman",
      "character": "Extremely extroverted, overly energetic, optimistic, free-spirited but far from elegant ",
      "quotes": "Shoe size doesn't matter"
},
"kristoff": {
    "name": "Kristoff Bjorgman",
    "voiced" : "Jonathan Groff",
      "age": "21 years",
      "birthdate": "Summer Solstice (June 20–21)",
      "nationality": "Home of Living Rock, Arendelle",
      "gender": "Male",
      "species" : "Sami Iceman",
      "character": " A loner but extremely loyal to his best friend, Sven. He is a selfless romantic but can be extremely lazy and grumpy",
      "quotes": "It's Okay, My Love Is Not Fragile."
},
"sven": {
    "name": "Kristoff Bjorgman",
    "voiced" : "Frank Welker",
      "age": "13 years",
      "birthdate": "Unknown",
      "nationality": "Kingdom of Arendelle",
      "gender": "Male",
      "species" : "Reindeer",
      "character": " Very childish, goofy but very loyal and extremely moral. He spends most of his time with his companion and best friend Kristoff. He posseses great strength and stamina but can be very naive",
      "quotes": "Rogue Knight at your service! There is no greater honor!!"
},
"unknown": {
    "name": "unknown",
    "voiced" : "unknown",
      "age": "0",
      "birthdate": "unknown",
      "nationality": "unknown",
      "gender": "unknown",
      "species" : "unknown",
      "character": "unknown",
      "quotes": "unknown"
},

}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (request, response) => {
   const characterName = request.params.character.toLowerCase()
   if(frozen[characterName]){
    response.json(frozen[characterName])
   }else{
       response.json(frozen['unknown'])
   }
})

app.listen(PORT, ()=>{
 console.log(`listening on port ${PORT}`)
})