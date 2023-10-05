import { QueryClient } from "./api/queryClient"
import { ListAllPokemonPage } from "./pages/ListAll"

function App() {
  return (
    <QueryClient>
      <ListAllPokemonPage />
    </QueryClient>
  )
}

export default App
