import AllPokemon from "./AllPokemon";
import "../Styles/globalStyle.css";

export default function Pokedex({ posts }) {
  return (
    <main>
      {posts &&
        posts.map((item) => {
          const { id, name, type } = item;
          return <AllPokemon key={id} id={id} name={name} type={type} />;
        })}
    </main>
  );
}
