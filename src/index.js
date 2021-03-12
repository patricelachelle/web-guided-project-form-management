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
  
  // const [petName, setPetName] = useState('')
  // const [petType, setPetType] = useState('')

  // const petNameHandler = event => setPetName(event.target.value)
  // const petTypeHandler = event => setPetType(event.target.value)

  // clean and more concise approach
  const defaultPetState = { petName: '', petType: '' }
  const [newPet, setNewPet] = useState(defaultPetState)

  const newPetHandler = event => {
    setNewPet({...newPet, [event.target.name]: event.target.value})
  }

  const submitHandler = event => {
    console.log('Submitted!!')
    setPets([...pets, newPet])
    event.preventDefault();
  }
  return (
    <div>
      <h2>React Simple Forms</h2>
      <form onSubmit={submitHandler}>
        <input name="petName" onChange={newPetHandler} type="text" placeholder="Pet Name"/>
        <input name="petType" onChange={newPetHandler} type="text" placeholder="Pet Type" />
        <input type="submit" value="Submit" />
      </form>
      <h3>Pets List</h3>
      <ul>
        {pets.map((pet, i) => <li key={i}>{pet.petName} is a {pet.petType}</li>)}
      </ul>
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
