import { useQuery } from '@tanstack/react-query'
const useGetBreeds = (searchParam) => {
  const { animal } = searchParam
  const { data, error } = useQuery({
    queryKey: ['breeds', animal], // Include animal in the queryKey
    queryFn: () =>
      fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`).then(
        (res) => res.json()
      ),
  })

  return data || []
}

export default useGetBreeds
