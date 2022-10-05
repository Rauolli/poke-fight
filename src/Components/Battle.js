import { useState, useEffect } from "react";
import PlayerPokemon from "./PlayerPokemon";
import EnemyPokemon from "./EnemyPokemon";
import "../Styles/battleStyle.css";

export default function Battle({ posts }) {
  const [start, setStart] = useState(0);
  const [button, setButton] = useState(false);
  const [playerPokemon, setPlayerPokemon] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();

  useEffect(() => {
    const randomIdPlayer = Math.floor(Math.random() * posts.length);
    setPlayerPokemon(posts.find((pkm) => pkm.id === randomIdPlayer));
    const randomIdEnemy = Math.floor(Math.random() * posts.length);
    setEnemyPokemon(posts.find((pkm) => pkm.id === randomIdEnemy));
  }, [posts]);

  useEffect(() => {
    if (!enemyPokemon || !playerPokemon) {
      return;
    }
    switch (start) {
      case 1:
        if (button) {
          enemyPokemon.base.HP = enemyPokemon.base.HP - 10;
          setStart(2);
          stopGame();
        }
        break;
      case 2:
        playerPokemon.base.HP = playerPokemon.base.HP - 10;
        setButton(false);
        setStart(1);
        stopGame();
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
    if (playerPokemon.base.HP <= 0) {
      alert("Loser!");
      setStart(0);
    } else if (enemyPokemon.base.HP <= 0) {
      alert("Winner!");
      setStart(0);
    } else {
      return;
    }
  };

  const speed = () => {
    if (playerPokemon.base.Speed >= enemyPokemon.base.Speed) {
      setStart(1);
    } else {
      setStart(2);
    }
  };
  return (
    <main>
      <div className="battle-cards">
        <PlayerPokemon pPokemon={playerPokemon} />
        <EnemyPokemon ePokemon={enemyPokemon} />
      </div>
      <div className="battle-buttons">
        <button onClick={handleClickStart}>Start Game</button>
        <button onClick={handleClickAttack}>Tackle</button>
      </div>
    </main>
  );
}
