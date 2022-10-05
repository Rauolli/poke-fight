import { useParams, useNavigate } from "react-router-dom";
import PokemonType from "./PokemonType";
import "../Styles/onePokemon.css";

export default function OnePokemon({ posts }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const numId = parseInt(id);
  const thisPost = posts.length && posts.find((post) => post.id === id);
  const myType = thisPost && thisPost.type;
  const base = thisPost && thisPost.base;
  return (
    <main>
      <div className="pagination">
        <button
          className="previous"
          disabled={numId < 2}
          onClick={() => navigate(`/Pokemon/${numId - 1}`)}
        >
          <span>Nr. {thisPost.id - 1}</span>
        </button>
        <button className="home" onClick={() => navigate(`/`)}>
          <span>Pokedex</span>
        </button>
        <button
          className="next"
          disabled={numId > 150}
          onClick={() => navigate(`/Pokemon/${numId + 1}`)}
        >
          <span>Nr. {thisPost.id + 1}</span>
        </button>
      </div>
      <div className="pokemon">
        {" "}
        {thisPost ? (
          <div className="card">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg)`,
              }}
            ></div>
            <article className="text-container">
              <div className="top-box">
                <h2>{thisPost.name.english}</h2>
              </div>
              <div className="info">
                {myType.length &&
                  myType.map((element) => {
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
                    <li>Attack: {base.Attack}</li>
                    <li>Defense: {base.Defense}</li>
                    <li>HP: {base.HP}</li>
                    <li>Sp. Attack: {base["Sp. Attack"]}</li>
                    <li>Sp. Defense: {base["Sp. Defense"]}</li>
                    <li>Speed: {base.Speed}</li>
                  </ul>
                  <br />
                </div>
              </div>
              {thisPost && posts.map((item) => {})}
            </article>
          </div>
        ) : (
          "not found"
        )}
      </div>
    </main>
  );
}
