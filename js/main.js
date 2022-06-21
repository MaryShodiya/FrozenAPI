document.querySelector('button').addEventListener('click', getCharacter)
function getCharacter(){
//let characterName = document.getElementsByName('input').value
fetch(`https://frozen-animation-api.herokuapp.com/api/elsa`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
    console.log(data)
    document.querySelector('.name_one').innerText= data.name
    document.querySelector('.age_one').innerText= data.age
    document.querySelector('.occupation_one').innerText= data.occupation_one
    document.querySelector('.quote_one').innerText= data.quotes
    document.querySelector('.img_one').src = data.image 
      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
    }