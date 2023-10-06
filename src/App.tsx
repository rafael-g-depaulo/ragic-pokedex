import { QueryClient } from "./api/queryClient"
import { ListAllPokemonPage } from "./pages/ListAll"
import { ListPokemonByTypePage } from "./pages/ListByType"
import { ShowPokemonPage } from "./pages/ShowPokemon"
import { GlobalStyles } from "./styles/globalStyles"

function App() {
  return (
    <QueryClient>
      <GlobalStyles />
      <ListPokemonByTypePage />
    </QueryClient>
  )
}

export default App
