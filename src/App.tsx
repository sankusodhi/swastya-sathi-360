import { useEffect } from 'react'
import { AppRouter } from './routes/AppRouter'
import { registerPwa } from './pwa/register'

function App() {
  useEffect(() => {
    registerPwa()
  }, [])

  return (
    <AppRouter />
  )
}

export default App
