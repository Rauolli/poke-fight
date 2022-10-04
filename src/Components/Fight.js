import { useState, useEffect } from "react";

export default function Fight({ PlayerPokemon }, { EnemyPokemon }) {
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

  //   const handleStart = () => {
  //     switch (start) {
  //       case 0:
  //         stopGame();
  //         break;
  //       case 1:
  //         handleClickAttack();
  //         setStart(2);
  //         break;
  //       case 2:
  //         player.hp = player.hp - enemy.attack;
  //         setStart(1);
  //         break;
  //       default:
  //         setStart(0);
  //         break;
  //     }
  //   };

  const speed = () => {
    if (player.speed >= enemy.speed) {
      setStart(1);
    } else {
      setStart(2);
    }
  };
  return;
  //   <button onClick="handleClickAttack">Tackle</button>
  // <button onClick="handleClickStart">Start Battle</button>
}

// Speed vergleich
// Angriff "Tackle" z.B 10 dmg
// HP Wert für jedes Pokemon
// Automatische Wechsel nach jedem Angriff
// Ende wenn HP auf 0 fallen
// Restart Button
