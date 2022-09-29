import { Link, useParams, useNavigate } from "react-router-dom";
import PokemonType from "./PokemonType";
import "../Styles/onePokemon.css";

export default function OnePokemon({ posts }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const numId = parseInt(id);
  const thisPost = posts.length && posts.find((post) => post.id == id);
  const myType = thisPost && thisPost.type;
  const base = thisPost && thisPost.base;
  console.log(base);
  return (
    <main>
      <div>
        <button onClick={() => navigate(`/Pokemon/${numId - 1}`)}>
          Previous Pokemon
        </button>
        <button onClick={() => navigate(`/Pokemon/${numId + 1}`)}>
          Next Pokemon
        </button>
      </div>
      <div className="pokemon">
        {" "}
        {thisPost ? (
          <div className="card">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`,
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
                      <span className={PokemonType(element)}>{element}</span>
                    );
                  })}
              </div>
              <div className="bottom-box">
                <div className="base">
                  <h3>Daten</h3>
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
