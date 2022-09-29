import { Link } from "react-router-dom";
import "../Styles/globalStyle.css";

export default function AllPokemon(props) {
  const { id, name, type } = props;
  const color = () => {
    if ({ type } === "grass".toUpperCase()) {
      return "green";
    }
  };

  return (
    <>
      <Link to={`/Pokemon/${id}`}>
        <div className="card-container">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`,
            }}
          ></div>
          <article className="text-container">
            <h2>{name.english}</h2>
            <span className={color()}>Type {`${type}`}</span>
            <span>{id}</span>
          </article>
        </div>
      </Link>
    </>
  );
}
