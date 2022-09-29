import AllPokemon from "./AllPokemon";
import "../Styles/globalStyle.css";

export default function Pokedex({ posts }) {
  console.log(posts);
  return (
    <main>
      {posts &&
        posts.map((item) => {
          // destructure item
          const { id, name, type } = item;

          return (
            <>
              <div className="recipe-cards">
                <AllPokemon key={id} id={id} name={name} type={type} />
              </div>
            </>
          );
        })}
    </main>
  );
}
