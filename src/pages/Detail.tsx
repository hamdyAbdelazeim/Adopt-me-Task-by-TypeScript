import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetDetails from '../hooks/useGetDetails'
import Loader from '../components/Loader'
import Carousel from '../components/Carousel'
import { createPortal } from 'react-dom'
import { Modal } from '../components/Modal'

function Detail() {
  const { id } = useParams()
  const { data, isPending, error } = useGetDetails(id)
  const hero = 'http://pets-images.dev-apis.com/pets/none.jpg' // Default placeholder image URL
  const pet = data?.pets[0]
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const newItem: HTMLElement | null = document.getElementById('modal')

  console.log(pet)
  {
    isPending && <Loader />
  }
  {
    error && <h3>{error.message}</h3>
  }
  return (
    <div>
      <h1 onClick={() => navigate('/')}></h1>
      <div className='details'>
        {isPending && (
          <div className='loader-container'>
            <Loader />
          </div>
        )}
        {/* read more about diff btw isLoading/isFetching - https://stackoverflow.com/a/62653366/6483379 */}
        {/* also it will nice to understand more about Status Checks in React Query - https://tkdodo.eu/blog/status-checks-in-react-query */}
        {data && (
          <div>
            <h1>{pet.name}</h1>
            <Carousel images={pet.images} />
            <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
            <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
            <p>{pet.description}</p>
            <button
              onClick={() => {
                navigate('/')
              }}
            >
              Back
            </button>
          </div>
        )}
      </div>
      {showModal &&
        newItem &&
        createPortal(<Modal close={setShowModal} pet={pet} />, newItem)}
    </div>
  )
}

export default Detail
