import { SetStateAction, createContext } from 'react'

interface PET {
  id: number
  name: string
  animal: string
  city: string
  state: string
  description: string
  breed: string
  images: string[]
}

const AdoptedPetContext = createContext<
  [PET | null, React.Dispatch<SetStateAction<PET | null>>]
>([null, () => null])

export default AdoptedPetContext
