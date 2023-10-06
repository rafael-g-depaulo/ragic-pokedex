import { FC } from "react"
import { styled } from "styled-components"
import { PokemonInfo } from "../logic/getPokemonInfo"

interface PokeInfoCardProps {
  pokemon: PokemonInfo
}

const Card = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "stats profile"
    "stats types";

  > .stats {
    grid-area: stats;
  }
  > img {
    grid-area: profile;
  }
  > ul {
    grid-area: types;
  }

  background: purple;
`

export const PokeInfoCard: FC<PokeInfoCardProps> = ({ pokemon }) => {
  return (
    <Card>
      <div>description</div>
      <img src={pokemon.spriteUrl} />
      <ul>types {pokemon.types.map((t) => t.name).join(", ")}</ul>
    </Card>
  )
}
