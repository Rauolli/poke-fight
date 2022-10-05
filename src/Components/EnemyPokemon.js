import PokemonType from "./PokemonType";

export default function EnemyPokemon({ ePokemon }) {
  const enemyType = ePokemon && ePokemon.type;
  return (
    <>
      {ePokemon && (
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
                      <span
                        key={crypto.randomUUID()}
                        className={PokemonType(element)}
                      >
                        {element}
                      </span>
                    );
                  })}
              </div>
              <div className="bottom-box">
                <div className="base">
                  <h3>Stats</h3>
                  <ul className="data">
                    <li>Attack: {ePokemon.base.Attack}</li>
                    <li>HP: {ePokemon.base.HP}</li>
                    <li>Defence: {ePokemon.base.Defense}</li>
                    <li>Speed: {ePokemon.base.Speed}</li>
                  </ul>
                  <br />
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
}
