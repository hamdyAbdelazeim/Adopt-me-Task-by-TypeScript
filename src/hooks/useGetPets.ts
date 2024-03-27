import { useQuery } from '@tanstack/react-query'

const useGetPets = (searchParam) => {
  const { animal, breed, location } = searchParam

  const { isPending, error, data } = useQuery({
    queryKey: ['pets', animal, breed, location],
    queryFn: () => {
      if (!breed) {
        return fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}`).then(
          (res) => res.json()
        )
      } else {
        return fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        ).then((res) => res.json())
      }
    },
  })

  return { data, error, isPending } || []
}

export default useGetPets
