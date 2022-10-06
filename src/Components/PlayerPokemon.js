import PokemonType from "./PokemonType";

export default function PlayerPokemon({ attack, pokemon, name }) {
  const playerType = pokemon && pokemon.type;
  return (
    <>
      {pokemon && (
        <div className="pokemon">
          <div className={attack?"attack-card":"battle-card"}>
            <h2>{name}</h2>
            <div
              className="thumb"
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg)`,
              }}
            ></div>
            <article className="text-container">
              <div className="top-box">
                <h2>{pokemon.name.english}</h2>
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
                    <li>Attack: {pokemon.base.Attack}</li>
                    <li>HP: {pokemon.base.HP}</li>
                    <li>Defence: {pokemon.base.Defense}</li>
                    <li>Speed: {pokemon.base.Speed}</li>
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
