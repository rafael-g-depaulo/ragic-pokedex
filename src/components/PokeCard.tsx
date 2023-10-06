import { FC } from "react"
import styled from "styled-components"
import { PokemonLink } from "../logic/getPokemonInfo"

interface PokeCardProps {
  pokemon: PokemonLink
}

const Card = styled.section`
	border-radius: 1.6rem;
	background: #83becd;

	display: flex;
	flex-direction: column;
	width: fit-content;
	padding: 0.8rem;

  > h3 {
		font-size: 1.0rem;
		margin: auto;
		color: #0b7995;
		background-color: #f5f5f5;
		padding: 0.4rem;
		border-radius: 0.4rem;
	}

	> figure {
		width: 6rem;
		height: 6rem;
		margin: auto;
		overflow: hidden;

		> img {
			aspect-ratio: 1;
			overflow: hidden;
			object-fit: contain;
			object-position: center;
			width: 100%;
			margin: 0%;
		}
	}

	transition: all 0.3s;
	transform: none;

	&:hover {
		transform:
			// translate(-1.3rem, 0.2rem)
			scale(1.08);
		;

		background-color: #49b1bb;
	}
`

export const PokeCard: FC<PokeCardProps> = ({ pokemon }) => {
  return (
    <Card>
      <h3>{pokemon.name}</h3>
      <figure>
        <img src={pokemon.spriteUrl} />
      </figure>
    </Card>
  )
}
