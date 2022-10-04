import { useState, useEffect } from "react";
import PlayerPokemon from "./PlayerPokemon";
import EnemyPokemon from "./EnemyPokemon";

export default function Battle({ posts }) {
  const playerPokemon = posts;
  const enemyPokemon = posts;
  const [start, setStart] = useState(0);
  const [button, setButton] = useState(false);
  const player = PlayerPokemon;
  const enemy = EnemyPokemon;

  useEffect(() => {
    switch (start) {
      case 0:
        stopGame();
        break;
      case 1:
        if (button) {
          enemy.hp = enemy.hp - player.attack;
          setStart(2);
        }
        break;
      case 2:
        player.hp = player.hp - enemy.attack;
        setButton(false);
        setStart(1);
        break;
      default:
        setStart(0);
        break;
    }
  });

  const handleClickStart = () => {
    speed();
  };

  const handleClickAttack = () => {
    setButton(true);
    // setStart(1);
  };

  const stopGame = () => {
    if (player.hp <= 0) {
      console.log("Loser!");
      setStart(0);
    } else {
      console.log("Winner");
      setStart(0);
    }
  };

  const speed = () => {
    if (player.speed >= enemy.speed) {
      setStart(1);
    } else {
      setStart(2);
    }
  };
  return (
    <>
      <EnemyPokemon posts={enemyPokemon} />
      <PlayerPokemon posts={playerPokemon} />
    </>
  );
}
