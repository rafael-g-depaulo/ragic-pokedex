import { QueryClient } from "./api/queryClient"
import { ListAllPokemonPage } from "./pages/ListAll"
import { ShowPokemonPage } from "./pages/ShowPokemon"
import { GlobalStyles } from "./styles/globalStyles"

function App() {
  return (
    <QueryClient>
      <GlobalStyles />
      <ShowPokemonPage />
    </QueryClient>
  )
}

export default App
