import React, { useContext, useEffect, useState } from 'react'
import useGetBreeds from '../hooks/useGetBreeds'
import Results from '../components/Results'
import useGetPets from '../hooks/useGetPets'
import AdoptedPetContext from '../contexts/AdoptedPetContext'

function Home() {
  const hero = 'http://pets-images.dev-apis.com/pets/none.jpg'
  const [searchParam, setSearchParam] = useState({
    animal: '',
    breed: '',
    location: '',
  })
  const animalList = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
  const { breeds } = useGetBreeds(searchParam)
  const { data, isPending, error } = useGetPets(searchParam)
  const pets = data?.pets
  const [adoptedPet] = useContext(AdoptedPetContext)

  useEffect(() => {
    console.log('Search parameters changed:', searchParam)
  }, [searchParam.animal, searchParam.breed, searchParam.location])

  return (
    <div>
      <h1>Adopt me</h1>
      <div className='search-params'>
        <form>
          {adoptedPet && (
            <div className=' pet image-container'>
              <img src={adoptedPet?.images[0] || hero} alt={adoptedPet?.name} />
            </div>
          )}

          <label htmlFor='location'>
            Location
            <input
              type='text'
              name='location'
              value={searchParam.location}
              onChange={(e) =>
                setSearchParam({ ...searchParam, location: e.target.value })
              }
            />
          </label>
          <label htmlFor='animal'>
            Animal
            <select
              name='animal'
              value={searchParam.animal}
              onChange={(e) =>
                setSearchParam({
                  ...searchParam,
                  animal: e.target.value,
                  breed: '',
                })
              }
            >
              <option value=''>Choose Animal</option>
              {animalList.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor='breeds'>
            Breeds
            <select
              name='breed'
              disabled={!searchParam.animal}
              value={searchParam.breed}
              onChange={(e) =>
                setSearchParam({ ...searchParam, breed: e.target.value })
              }
            >
              <option value=''>Choose Your Breed</option>
              {breeds &&
                breeds.map((bread) => (
                  <option key={bread} value={bread}>
                    {bread}
                  </option>
                ))}
            </select>
          </label>
        </form>
      </div>
      <Results pets={pets} pending={isPending} err={error} />
    </div>
  )
}

export default Home
