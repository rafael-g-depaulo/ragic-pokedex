# Projeto de Teste: Biblioteca Ragic

### Ideia
O objetivo desse projeto teste é desenvolvedores com experiência em react (vocês) possam avaliar a biblioteca Ragic e comparar seu uso com a React-Router-Dom, avaliando a usabilidade, intuitividade e conforto de uso.

#### Especificação do projeto

Todos adoramos Pokemon, mas tem 500 bilhões deles e eu não lembro quem é quem! Preciso da sua ajuda para montar um app web de pokedex, para poder listar todos os pokemons, ver todos os pokemons de cada tipo, e visualizar em detalhes a informação de um único pokemon.

Já tem pronto na branch `main` todos os componentes visuais (na pasta `src/components/`), a lógica de comunicação com [a API pronta da pokedex](https://pokeapi.co) (na pasta `src/api/`), a lógica interna de tipos (`src/logic/`, isso só faz parse das informações recebidas da API e define os tipos usados na pokedex), a estilização global do app (`src/styles/`), e até as páginas do app em si estão parcialmente construídas (na pasta `src/pages/`).

É necessário então que você construa uma lógica de roteamento para as páginas, seguindo o plano abaixo das rotas que a pokedex precisa:

| Rota                   | Descrição                                                              |
| ---------------------- | ---------------------------------------------------------------------- |
| `/`                    | Home do app, que deixa ir para a página de listagem global ou por tipo |
| `/pokemon`             | Lista de todos os pokemons                                             |
| `/pokemon/:pokemon_id` | Visualizar detalhes do pokemon de id `:pokemon_id`                     |
| `/type/:type_id`       | Lista de todos os pokemons do tipo de id `:type_id`                    |

A documentação da biblioteca se encontra disponível [aqui](https://www.npmjs.com/package/@ragic/ragiclib)
