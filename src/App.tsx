import { QueryClient } from "./api/queryClient"
import { ListAllPokemonPage } from "./pages/ListAll"
import { GlobalStyles } from "./styles/globalStyles"

function App() {
  return (
    <QueryClient>
      <GlobalStyles />
      <ListAllPokemonPage />
    </QueryClient>
  )
}

export default App
