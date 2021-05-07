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
  //React State
  const [pets, setPets] = useState(petsList)
  const defaultState = { petName: '', petType: '' }
  const [newPet, setNewPet] = useState(defaultState)
  
  const changeHandler = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setNewPet({...newPet, [inputName]: inputValue})
  }
  const submitHandler = event => {
    event.preventDefault()
    setPets([...pets, {petName, petType}])
    //clear the form
    setNewPet(defaultState)
    //grab the input
    //then focus
    const petInput = document.querySelector('#pet-name')
    petInput.focus()
  }
  return (
    <div className="container">
      <h1>Simple Form App</h1>
      {pets.map((pet, index) => <p key={index}>{pet.petName} is a {pet.petType}</p>)}
      <form onSubmit={submitHandler}>
        <input name="petName" id="pet-name" type="text" onChange={changeHandler} placeholder="Pet Name" value={newPet.petName}/>
        <input name="petType" type="text" onChange={changeHandler} placeholder="Pet Type" value={newPet.petType}/>
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
