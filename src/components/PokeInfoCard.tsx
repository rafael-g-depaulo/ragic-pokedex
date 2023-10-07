import { FC } from "react"
import { styled } from "styled-components"
import { PokemonInfo } from "../logic/getPokemonInfo"
import { Link } from "../routes"
import { PokeStats } from "./PokeStats"
import { TypeBadge } from "./TypeBadge"

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
  > .img-container {
    grid-area: profile;
  }
  > ul {
    grid-area: types;
  }

  place-items: center;
  gap: 0.4rem 1.6rem;

  padding: 1.2rem;
  border-radius: 0.4rem;

  background: linear-gradient(239deg, #015165, #8ac2d0c7);
  --shadow-distance: 0.2rem;
  box-shadow: #353535cc var(--shadow-distance) var(--shadow-distance);

  > .stats {
    place-self: start;
  }

  > .img-container {
    background: white;
    border-radius: 0.2rem;
    margin: 0;

    > img {
      aspect-ratio: 1;
      width: 7rem;
    }
  }

  > ul {
    padding: 0;
    margin: 0;
    list-style: none;

    align-self: start;
    display: flex;
    gap: 0.4rem;

    a {
      text-decoration: none;
    }

    ${TypeBadge} {
      transform: none;
      transition: 0.1s;
      box-shadow: 0.125rem 0.125rem 0px 0px #00000030;

      &:hover {
        transform: scale(1.15);
        box-shadow: 0.175rem 0.175rem 2px 0px #00000069;
      }
    }
  }

  // animation stuff
  transition: 0.2s;
  transform: none;

  &:hover {
    transform: scale(1.02);
    --shadow-distance: 0.35rem;
  }
`

export const PokeInfoCard: FC<PokeInfoCardProps> = ({ pokemon }) => {
  return (
    <Card>
      <PokeStats className="stats" stats={pokemon.stats} />
      <figure className="img-container">
        <img src={pokemon.spriteUrl} alt={pokemon.name} />
      </figure>
      <ul>
        {pokemon.types.map(({ name, id }) => (
          <li>
            <Link to="/type/:type_id" params={{ type_id: id }}>
              <TypeBadge name={name}>{name}</TypeBadge>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
