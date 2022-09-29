import { useParams } from "react-router-dom";
import "../Styles/onePokemon.css";

export default function OnePokemon({ posts }) {
  const { id } = useParams();
  const thisPost = posts.length && posts.find((post) => post.id == id);
  const base = thisPost && thisPost.base;
  console.log(base);
  console.log(thisPost);
  return (
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
              <span>Type: {thisPost.type}</span>
            </div>
            <div className="bottom-box">
              <div className="base">
                <h3>Daten</h3>
                <ul className="data">
                  <li>Attack: {base.Attack}</li>
                  <li>Defense: {base.Defense}</li>
                  <li>HP: {base.HP}</li>
                  <li>Sp. Attack: {base.SpAttack}</li>
                  <li>Sp. Defense: {base.SpDefense}</li>
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
  );
}
