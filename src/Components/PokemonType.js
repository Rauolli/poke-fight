export default function PokemonType(element) {
  let pokemonType = "";
  switch (element) {
    case "Grass":
      pokemonType = "grass";
      break;
    case "Poison":
      pokemonType = "poison";
      break;
    case "Fire":
      pokemonType = "fire";
      break;
    case "Flying":
      pokemonType = "flying";
      break;
    case "Water":
      pokemonType = "water";
      break;
    case "Bug":
      pokemonType = "bug";
      break;
    case "Normal":
      pokemonType = "normal";
      break;
    case "Electric":
      pokemonType = "electric";
      break;
    case "Ground":
      pokemonType = "ground";
      break;
    case "Fairy":
      pokemonType = "fairy";
      break;
    case "Fighting":
      pokemonType = "fighting";
      break;
    case "Psychic":
      pokemonType = "psychic";
      break;
    case "Rock":
      pokemonType = "rock";
      break;
    case "Steel":
      pokemonType = "steel";
      break;
    case "Ice":
      pokemonType = "ice";
      break;
    case "Ghost":
      pokemonType = "ghost";
      break;
    case "Dragon":
      pokemonType = "dragon";
      break;
    default:
      pokemonType = "";
  }
  return pokemonType;
}
