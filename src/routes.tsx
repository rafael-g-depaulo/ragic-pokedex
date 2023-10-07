import { UseRoutes, createRoutes, path } from "@ragic/ragiclib"
import { HomePage } from "./pages/HomePage"
import { ListAllPokemonPage } from "./pages/ListAll"
import { ListPokemonByTypePage } from "./pages/ListByType"
import { ShowPokemonPage } from "./pages/ShowPokemon"

const routes = createRoutes()
  .path("/", { component: HomePage })
  .path("/type", {
    children: path("/:type_id", { component: ListPokemonByTypePage }),
  })
  .path("/pokemon", {
    component: ListAllPokemonPage,
    children: path("/:pokemon_id", { component: () => <ShowPokemonPage /> }),
  })

export const { Link, Router, useRouteParams } = UseRoutes(routes)
