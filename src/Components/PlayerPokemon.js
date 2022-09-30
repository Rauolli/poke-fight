import PokemonType from "./PokemonType";

export default function PlayerPokemon({ posts }) {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 151);
  };
  const playerPokemon = posts[getRandomInt()];
  const playerType = playerPokemon && playerPokemon.type;
  return (
    <section>
      <div className="pokemon">
        <div className="card">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${playerPokemon.id}.svg)`,
            }}
          ></div>
          <article className="text-container">
            <div className="top-box">
              <h2>{playerPokemon.name.english}</h2>
            </div>
            <div className="info">
              {playerType.length &&
                playerType.map((element) => {
                  return (
                    <span className={PokemonType(element)}>{element}</span>
                  );
                })}
            </div>
            <div className="bottom-box">
              <div className="base">
                <h3>Stats</h3>
                <br />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
