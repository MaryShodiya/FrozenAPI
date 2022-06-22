
document.querySelector('button').addEventListener('click', getCharacter)

async function getCharacter(){
try{
  let characterName = document.querySelector('input').value
  let url = `https://frozen-animation-api.herokuapp.com/api/${characterName}`
  const response = await fetch(url)
        const data = await response.json()
        console.log(data) 
      document.querySelector('.name').innerText= data.name
       document.querySelector('.age').innerText= data.age
      document.querySelector('.occupation').innerText= data.occupation
       document.querySelector('.quote').innerText= data.quotes
      document.querySelector('.img').src = data.image 
    }catch(error){
        console.log(error)
    }

  }

