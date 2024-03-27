import React, { useContext } from 'react'
import AdoptedPetContext from '../contexts/AdoptedPetContext'
import { useNavigate } from 'react-router'

export const Modal = ({ close, pet }) => {
  console.log(close)
  console.log(pet)
  const navigate = useNavigate()
  const [, setAdoptedPet] = useContext(AdoptedPetContext)
  return (
    <div>
      <h1>Would you like to adopt {pet?.name} </h1>
      <div className='buttons'>
        <button
          onClick={() => {
            setAdoptedPet(pet)
            navigate('/')
          }}
        >
          yes
        </button>
        <button onClick={() => close(false)}>No</button>
      </div>
    </div>
  )
}
