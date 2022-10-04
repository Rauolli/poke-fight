import PokemonType from "./PokemonType";

export default function PlayerPokemon({ posts }) {
  const randomId = Math.floor(Math.random() * posts.length);
  const pPokemon = posts.find((pkm) => pkm.id === randomId);
  const playerType = pPokemon && pPokemon.type;
  return (
    <section>
      <div className="pokemon">
        <div className="card">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pPokemon.id}.svg)`,
            }}
          ></div>
          <article className="text-container">
            <div className="top-box">
              <h2>{pPokemon.name.english}</h2>
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
