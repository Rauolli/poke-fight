import { Link } from "react-router-dom";
import PokemonType from "./PokemonType";
import "../Styles/globalStyle.css";

export default function AllPokemon(props) {
  const { id, name, type } = props;
  const myType = props.type;

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
            <div className="info">
              {myType.length &&
                myType.map((element) => {
                  return (
                    <span className={PokemonType(element)}>{element}</span>
                  );
                })}
            </div>

            <span>NR. {id}</span>
          </article>
        </div>
      </Link>
    </>
  );
}
