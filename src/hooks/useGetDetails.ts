import { useQuery } from '@tanstack/react-query'
const useGetDetails = (id) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['pet', id],
    queryFn: () =>
      fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`).then((res) =>
        res.json()
      ),
  })
  return { data, error, isPending }
}

export default useGetDetails
