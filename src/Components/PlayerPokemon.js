import PokemonType from "./PokemonType";

export default function PlayerPokemon({ attack, pPokemon }) {
  const playerType = pPokemon && pPokemon.type;
  return (
    <>
      {pPokemon && (
        <div className="pokemon">
          <div className={attack?"attack-card":"battle-card"}>
            <h2>Player</h2>
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
                    <li>Attack: {pPokemon.base.Attack}</li>
                    <li>HP: {pPokemon.base.HP}</li>
                    <li>Defence: {pPokemon.base.Defense}</li>
                    <li>Speed: {pPokemon.base.Speed}</li>
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
