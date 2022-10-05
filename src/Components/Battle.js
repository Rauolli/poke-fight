import { useState, useEffect } from "react";
import PlayerPokemon from "./PlayerPokemon";
import EnemyPokemon from "./EnemyPokemon";

export default function Battle({ posts }) {
  const [start, setStart] = useState(0);
  const [button, setButton] = useState(false);
  const [pPokemon, setPPokemon] = useState();
  const [ePokemon, setEPokemon] = useState();

  useEffect(() => {
    const randomIdPlayer = Math.floor(Math.random() * posts.length);
    setPPokemon(posts.find((pkm) => pkm.id === randomIdPlayer));
    const randomIdEnemy = Math.floor(Math.random() * posts.length);
    setEPokemon(posts.find((pkm) => pkm.id === randomIdEnemy));
  }, [posts]);

  useEffect(() => {
    if (!ePokemon || !pPokemon) {
      return;
    }
    switch (start) {
      case 1:
        stopGame();
        if (button) {
          ePokemon.base.HP = ePokemon.base.HP - 10;
          setStart(2);
        }
        break;
      case 2:
        stopGame();
        pPokemon.base.HP = pPokemon.base.HP - 10;
        setButton(false);
        setStart(1);
        break;
      default:
        setStart(0);
        break;
    }
  }, [start, button]);

  const handleClickStart = () => {
    speed();
  };

  const handleClickAttack = () => {
    setButton(true);
    setStart(1);
  };

  const stopGame = () => {
    if (pPokemon.base.HP <= 0) {
      alert("Loser!");
      setStart(0);
    } else if (ePokemon.base.HP <= 0) {
      alert("Winner");
      setStart(0);
    } else {
      return;
    }
  };

  const speed = () => {
    if (pPokemon.base.Speed >= ePokemon.base.Speed) {
      setStart(1);
    } else {
      setStart(2);
    }
  };
  return (
    <>
      <PlayerPokemon pPokemon={pPokemon} />
      <EnemyPokemon ePokemon={ePokemon} />
      <button onClick={handleClickStart}>Start Game</button>
      <button onClick={handleClickAttack}>Tackle</button>
    </>
  );
}
