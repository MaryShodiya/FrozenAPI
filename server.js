const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const uploadImages = multer({dest:'uploads/'})
const  PORT = 8000


app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const frozen = {
"elsa": {
    "name": "Elsa of Arendelle",
    "image": "/uploads/elsa.png",
    "voiced" : "Idina Menzel",
      "age": "24 years",
      "birthdate": "Winter Solstice (December 21–22)",
      "home": "Kingdom of Arendelle",
      "gender": "Female",
      "species": "Immortal Goddess",
      "character": "Dutiful, humble and extemely poised to a fault. Hid her emotions, bottling up anger due to insecurity hence her  frequent moody disposition ",
      "quotes": "Be the good girl you always have to be",
      "occupation":"Princess of Arendelle and The Fifth Spirit "
},

"olaf": {
    "name": "Olaf",
    "image": "/uploads/olaf.png",
    "voiced" : "Josh Gad",
      "age": "3 years",
      "birthdate": "Winter Solstice (December 16)",
      "home": "Kingdom of Arendelle",
      "gender": "Male",
      "species" : "Snowman",
      "character": "Nicest snowman in Arendelle, great at charades, enjoys stargazing and dancing",
      "quotes": "Some People Are Worth Melting For.",
      "occupation": "Snowman"
},
"anna": {
  "name": "Anna of Arendelle",
  "image": "/uploads/anna.png",
  "voiced" : "Kristen Bell",
    "age": "21 years",
    "birthdate": "Summer Solstice (June 20–21)",
    "home": "Kingdom of Arendelle",
    "gender": "Female",
    "species" : "Snowman",
    "character": "Extremely extroverted, overly energetic, optimistic, free-spirited but far from elegant ",
    "quotes": "Shoe size doesn't matter",
    "occupation": "Princess of Arendelle"
},

"hans": {
  "name": "Hans Westergaard",
  "image": "/uploads/hans.png",
  "voiced" : "Santino Fontana",
    "age": "23 years",
    "birthdate": "unknown",
    "home": "The Southern Isles",
    "gender": "Male",
    "species" : "Human",
    "character": "Intelligent, posseses great sportmanship ",
    "quotes": "Fifty percent of something is better than a hundred percent of nothing.",
    "occupation": "Prince of the Southern Isles and Interim leader of Arendelle"
},

"kristoff": {
    "name": "Kristoff Bjorgman",
    "image": "/uploads/kristoff.png",
    "voiced" : "Jonathan Groff",
      "age": "24 years",
      "birthdate": "Summer Solstice (June 20–21)",
      "home": "Home of Living Rock, Arendelle",
      "gender": "Male",
      "species" : "Sami Iceman",
      "character": " A loner but extremely loyal to his best friend, Sven. He is a selfless romantic but can be extremely lazy and grumpy",
      "quotes": "It's Okay, My Love Is Not Fragile.",
      "occupation": "Prince Consort of Arendelle and Ice harvester"
},
"sven": {
    "name": "Mr Cranky Caribou",
    "image": "/uploads/sven.png",
    "voiced" : "Jonathan Groff",
      "age": "21 years",
      "birthdate": "Unknown",
      "home": "Kingdom of Arendelle",
      "gender": "Male",
      "species" : "Reindeer",
      "character": " Very childish, goofy but very loyal and extremely moral. He spends most of his time with his companion and best friend Kristoff. He posseses great strength and stamina but can be very naive",
      "quotes": "Rogue Knight at your service! There is no greater honor!!",
      "occupation":"Kristoff Reindeer"
},

"iduna": {
  "name": "Queen Iduna of Arendelle",
  "image": "/uploads/queeniduna.png",
  "voiced" : "Jennifer Lee",
    "age": "30 years",
    "birthdate": "Unknown",
    "home": "The Enchanted Forest (birthplace); Arendelle Castle",
    "gender": "Female",
    "species" : "Human",
    "character": " Motherly, Protective, Highly Compassionate. Loves being with her family. Favourite snack is Chocolate",
    "quotes": "Sleep my darling, safe and sound. For in this river, all is found",
    "occupation": "Queen of Arendelle"
},

"duke": {
  "name": "Duke of Weselton",
  "image": "/uploads/duke.png",
  "voiced" : "Alan Tudyk",
    "age": "51 years",
    "birthdate": "Unknown",
    "home": "Weselton",
    "gender": "Male",
    "species" : "Human",
    "character": " A wealthy business man but arrogant, pompous and cunny ",
    "quotes": "If we dont do something soon, we'll all freeze to death",
    "occupation": "Duke of Weselton"
},

"agnarr": {
  "name": "King Agnarr",
  "image": "/uploads/agnarr.jpeg",
  "voiced" : "Maurice LeMarche",
    "age": "42 years",
    "birthdate": "Unknown",
    "home": " Arendelle Castle",
    "gender": "Male",
    "species" : "Human",
    "character": "Fatherly, Protective, Helped Elsa control her powers",
    "quotes": "No! We'll protect her. She can learn to control it, I'm sure. Until then, we'll lock the gates. We'll reduce the staff. We will limit her contact with people and keep her powers hidden from everyone ... including Anna",
    "occupation": "Ruler of Arendelle"
},

"runenard": {
  "name": "King Runenard ",
  "image": "/uploads/runenard.png",
  "voiced" : "Jeremy Sisto",
    "age": "unknown",
    "birthdate": "Unknown",
    "home": " Arendelle Castle",
    "gender": "Male",
    "species" : "Human",
    "character": "Distasted Magic, a Ruthless King ",
    "quotes": "Magic makes people feel too powerful",
    "occupation": "Formar King of Arendelle"
},

"dignitaries": {
  "name": ["Spanish Dignitary", "French Dignitary", "German Dignitary", "Irish Dignitary"],
  "image": "/uploads/dignitaries.png",
  "voiced" : ["Jessie Korti", "Jessie Marcus", "Tucker Gilmore"],
    "age": "unknown",
    "birthdate": "Unknown",
    "home": ["Spain", "France", "Germany", "Ireland"],
    "gender": "Male",
    "occupation" : "Representatives of their Nation",
    "character": "unknown",
    "quotes": "unknown",
    "occupation":"dignitaries"
},

"bulda": {
  "name": "Bulda",
  "image": "/uploads/bulda.png",
  "voiced" : "Maia Wilson",
    "age": "700 years",
    "birthdate": "Unknown",
    "home": "Valley Of the Living Rock",
    "gender": " Female Troll",
    "species" : "Troll",
    "character": " An outgoing troll, possessing high spirits and approaching situations with an open mind. She has a maternal, caring side, having taken in Kristoff and Sven",
    "quotes": "People make bad choices if they're mad, or scared, or stressed. But throw a little love their way ... you'll bring out their best.",
    "occupation": "Wife of Cliff"
},

"pabbie": {
  "name": "Grand Pabbie",
  "image": "/uploads/pabbie.png",
  "voiced" : "Ciaran Hinds",
    "age": " Over 700 years",
    "birthdate": "Unknown",
    "home": "Valley of the Living Rock/ King of the Trolls",
    "gender": "Male Troll",
    "species" : "Troll",
    "character": "Pabbie is extremely wise and smart and this is attributed to his old age and he has magical abilities",
    "quotes": "Fear will be your enemy",
    "occupation":"Magician"
},

"gerda": {
  "name": "Gerda",
  "image": "/uploads/gerda.png",
  "voiced" : "Edie McClurg",
    "age": "unknown",
    "birthdate": "Unknown",
    "home": "Arendelle",
    "gender": "Female",
    "species" : "Human",
    "character": " An Introvert and loyal servant",
    "quotes": "We are safe",
    "occupation": "Servant at Arendelle castle"
},

"kai": {
  "name": "Kai",
  "image": "/uploads/kai.png",
  "voiced" : "Stephen John Anderson",
    "age": "unknown",
    "birthdate": "Unknown",
    "home": "Arendelle",
    "gender": "Male",
    "species" : "Human",
    "character": " Dilligent and Loyal, extremely formal and strictly obeyed royal protocols",
    "quotes": "Presenting her majesty: Queen Anna of Arendelle",
    "occupation": "Overseer at Arendelle castle"
},

"oaken": {
  "name": "Mr Wandering Oaken",
  "image": "/uploads/oaken.png",
  "voiced" : "Chris Williams",
    "age": "",
    "birthdate": "Unknown",
    "home": "Trading post, Arendelle",
    "gender": "Male",
    "species" : "Human",
    "character": " Extremely Funny, Diligent, Humble and Hardworking ",
    "quotes": "Hoo-hoo! Big summer blowout!",
    "occupation": "Shopkeeper and Owner of Wandering Oaken's Trading Post and Sauna"
},

"marshmallow": {
  "name": "Marshmallow",
  "image": "/uploads/marshmallow.png",
  "voiced" : "Paul Briggs",
    "age": "",
    "birthdate": "Unknown",
    "home": "Elsa's ice palace",
    "gender": "Male",
    "species" : "Giant Snow Monster",
    "character": " Very short-tempered and aggressively but extremely loyal to its creator",
    "quotes": "Don't come back!",
    "occupation": "Guard of Elsa's ice palace"
},
"cliff": {
  "name": "Cliff",
  "image": "/uploads/cliff.jpeg",
  "voiced" : "Lewis Cleale",
    "age": "unknown",
    "birthdate": "unknown",
    "home": "Valley of the Living Rock",
    "gender": "Male",
    "species" : "Troll",
    "character": "Loved his wife, Bulda",
    "quotes": "uAre you holding back your fondness, Due to his unmanly blondness?",
    "occupation": "Husband of Bulda"
},

"unknown": {
    "name": "unknown",
    "image": "unknown",
    "voiced" : "unknown",
      "age": "0",
      "birthdate": "unknown",
      "home": "unknown",
      "gender": "unknown",
      "species" : "unknown",
      "character": "unknown",
      "quotes": "unknown",
      "occupation": "unknown"
},

}



const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads')
  },
  filename: function (request, file, callback) {
    callback(null, file.originalname)
  }
})


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

app.post('/', uploadImages.single('file'), (request, response) => {
  if(!request.file){
    console.log('No File Recieved')
    return response.send({
      success: false,
    });  
  }else{
    console.log('File Recieved');
    return response.send({
      success: true,
    })
  }
})

app.listen(process.env.PORT || PORT, ()=>{
 console.log(`listening on port ${PORT}`)
})