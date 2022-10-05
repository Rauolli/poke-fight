import { Link } from "react-router-dom";
import PokemonType from "./PokemonType";
import "../Styles/globalStyle.css";

export default function AllPokemon(props) {
  const { id, name, type } = props;
  // const myType = props.type;

  const fillUpNumber = (id)=>{
    const idStr = id.toString();
    let numberStr = "";
    for (let i = 0; i < (3 - idStr.length); i++)  {
      numberStr += "0";     
    }
    return `#${numberStr}${id}`;
  }
  return (
    <>
      <Link to={`/Pokemon/${id}`}>
        <div className="card-container">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg)`,
            }}
          ></div>
          <article className="text-container">
            <h2>{name.english}</h2>
            <div className="info">
              {type.length &&
                type.map((element) => {
                  return (
                    <span className={PokemonType(element)}>{element}</span>
                  );
                })}
            </div>

            <span>{fillUpNumber(id)}</span>
          </article>
        </div>
      </Link>
    </>
  );
}
