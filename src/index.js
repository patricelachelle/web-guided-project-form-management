import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList)
  const defaultNewPet = { petName: '', petType: ''}
  const [newPet, setNewPet] = useState(defaultNewPet)

  const inputHandler = event => {
    const pet = {
      ...newPet,
      [event.target.name]: event.target.value
    }
    setNewPet(pet)
  }
  const submitHandler = event => {
    event.preventDefault()
    setPets([...pets, newPet])
    setNewPet(defaultNewPet)

  }
  return (
    <div>
      <h1>Simple Form App</h1>
      {pets.map((pet, idx) => (
        <div key={idx}>
          {pet.petName} is a {pet.petType}
        </div>
      ))}
      <form onSubmit={submitHandler}>
        <input 
        onChange={inputHandler} 
        type='text' 
        placeholder='Pet Name' 
        name='petName' 
        value={newPet.petName}  
        />
        <input 
        onChange={inputHandler} 
        type='text' 
        placeholder='Pet Type' 
        name='petType'
        value={newPet.petType}
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

render(
  <>
    
    <SimpleForm /> 
    <App />
  </>
  , document.querySelector('#root')
)
