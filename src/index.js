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

const initialFormValue = {
  petName: '',
  petType: '',
}

function SimpleForm() {
  const [pets, setPets] = useState(petsList)
  const [formValues, setFormValues] = useState(initialFormValue)

  // const changeName = evt => {
  //   const { value } = evt.target
  //   setFormValues({...formValues, petName: value })
  // }
  // const changeType = evt => {
  //   const { value } = evt.target
  //   setFormValues({...formValues, petType: value })
  // }
  const change = evt => {
    // debugger
    const { name, value } = evt.target
    setFormValues({...formValues, [name]: value })
  }

  const submit = evt => {
    evt.preventDefault()
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim(),
    }
    setPets(pets.concat(newPet))
    setFormValues(initialFormValue)
  }

  return (
    <div className="container">
      <h1>Simple Form</h1>
      {pets.map((pet, idx) => {
        return (
        <div key={idx}>
          {pet.petName} is a {pet.petType}
        </div>
        )})
      }
      <form onSubmit={submit}>
        <input name='petName' type='text' onChange={change} value={formValues.petName} />
        <input name='petType' type='text' onChange={change} value={formValues.petType} />
        <button>submit</button>
      </form>
    </div>
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
