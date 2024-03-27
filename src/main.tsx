import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.js'
import './index.css'
import AdoptedPetContext from './contexts/AdoptedPetContext.js'
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
    } as { cacheTime: number; staleTime: number },
  },
})

function Main() {
  const adoptedPet = useState<PET | null>(null)

  return (
    <Router>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </Router>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
