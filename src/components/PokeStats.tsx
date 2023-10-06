import { FC } from "react"
import { styled } from "styled-components"
import { PokemonStats } from "../logic/getPokemonInfo"

interface PokeStatsProps {
  stats: PokemonStats
  className?: string
}

const StatsList = styled.ol`
  list-style: none;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const Stat = styled.li<{ value: number; name: keyof PokemonStats }>`
  background-color: ${({ name }) =>
    name === "hp"
      ? "#FF5959"
      : name === "attack"
      ? "#F5AC78"
      : name === "defense"
      ? "#FAE078"
      : name === "special-attack"
      ? "#9DB7F5"
      : name === "special-defense"
      ? "#A7DB8D"
      : name === "speed"
      ? "#FA92B2"
      : "white"};

  width: calc(${(props) => props.value} * 0.08rem);
  border-radius: 0.15rem;
  padding: 0.1rem 0.4rem;
`

const statLabel: { [k in keyof PokemonStats]: string } = {
  hp: "HP",
  attack: "Atk",
  defense: "Def",
  "special-attack": "S-Atk",
  "special-defense": "S-Def",
  speed: "Spe",
}

export const PokeStats: FC<PokeStatsProps> = ({ stats, className }) => {
  return (
    <StatsList className={className}>
      <Stat value={stats.hp} name="hp">
        {statLabel["hp"]}
      </Stat>
      <Stat value={stats.attack} name="attack">
        {statLabel["attack"]}
      </Stat>
      <Stat value={stats.defense} name="defense">
        {statLabel["defense"]}
      </Stat>
      <Stat value={stats["attack"]} name="special-attack">
        {statLabel["special-attack"]}
      </Stat>
      <Stat value={stats["special-defense"]} name="special-defense">
        {statLabel["special-defense"]}
      </Stat>
      <Stat value={stats.speed} name="speed">
        {statLabel["speed"]}
      </Stat>
    </StatsList>
  )
}
