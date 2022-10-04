import PokemonType from "./PokemonType";

export default function EnemyPokemon({ posts }) {
  const randomId = Math.floor(Math.random() * posts.length);
  const ePokemon = posts.find((pkm) => pkm.id === randomId);
  const enemyType = ePokemon && ePokemon.type;
  return (
    <section>
      <div className="pokemon">
        <div className="card">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ePokemon.id}.svg)`,
            }}
          ></div>
          <article className="text-container">
            <div className="top-box">
              <h2>{ePokemon.name.english}</h2>
            </div>
            <div className="info">
              {enemyType.length &&
                enemyType.map((element) => {
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
