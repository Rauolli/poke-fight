import { useState, useEffect } from "react";
import PlayerPokemon from "./PlayerPokemon";
import "../Styles/battleStyle.css";
import GameOver from "./GameOver";

export default function Battle({ posts }) {
  const [started, setStarted] = useState(false);
  const [rndIds, setRndIds]= useState({
    randomIdPlayer: Math.floor(Math.random() * posts.length),
    randomIdEnemy: Math.floor(Math.random() * posts.length)  
  });
  const [attackPlayer, setPlayerAttack] = useState(false);
  const [attackEnemy, setEnemyAttack] = useState(false);
  const [playerPokemon, setPlayerPokemon] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState([]);
  const [loser, setLoser] = useState([]);
  const [rounds, setRounds] = useState(0);

  useEffect(() => {
    setPlayerPokemon(posts.find((pkm) => pkm.id === rndIds.randomIdPlayer));
    setEnemyPokemon(posts.find((pkm) => pkm.id === rndIds.randomIdEnemy));
  }, [posts]);

  useEffect(() => {
    if (!enemyPokemon || !playerPokemon) {
      return;
    }
    if(gameOver){
      return;
    }
    if (started) {
      if (attackEnemy) {
        setPlayerAttack(false);
        setEnemyAttack(true);
        setTimeout(()=>attackOpponent(playerPokemon, enemyPokemon), 800);
      } else if(attackPlayer){
        setPlayerAttack(true);
        setEnemyAttack(false);
        setTimeout(()=>attackOpponent(enemyPokemon, playerPokemon), 800);
      }
    }
  }, [started, attackPlayer, attackEnemy, gameOver]);

  const attackOpponent = (player1, player2)=>{
    setRounds(rounds + 1);  
    player2.base.HP = player2.base.HP - Math.ceil(parseInt(player1.base.Attack)/(parseInt(player2.base.Defense * 0.2)));
    setEnemyAttack(!attackEnemy);
    setPlayerAttack(!attackPlayer);
    checkIfGameIsOver(player1, player2);
  };

  const checkIfGameIsOver = (pl1, pl2)=>{
    if ((pl1.base.HP <= 0) || (pl2.base.HP <= 0)) {
      setGameOver(true);
      setStarted(false);
      if (pl1.base.HP < pl2.base.HP) {
        setWinner([pl2]);
        setLoser([pl1]);
      }else if(pl2.base.HP < pl1.base.HP){
        setWinner([pl1]);
        setLoser([pl2]);
      }else{
        setWinner([pl1, pl2]);
        setLoser([pl1, pl2]);
      }
    }
  };

  const handleClickNewGame = () => {
      setRndIds({
        randomIdPlayer: Math.floor(Math.random() * posts.length),
        randomIdEnemy: Math.floor(Math.random() * posts.length)  
      });
      setPlayerPokemon(posts.find((pkm) => pkm.id === rndIds.randomIdPlayer));
      setEnemyPokemon(posts.find((pkm) => pkm.id === rndIds.randomIdEnemy));
      setStarted(false);
      setGameOver(false);
      setEnemyAttack(false);
      setPlayerAttack(false);
      checkSpeed();  
  };

  const handleClickStartGame = () => {
    setRounds(0);
    if (enemyPokemon.base.HP <= 0 || playerPokemon.base.HP <= 0) {
      setGameOver(true);
      setStarted(false);
      return;
    }
    setStarted(true);
    setGameOver(false);
    checkSpeed();
  };


  const checkSpeed = () => {
    if (playerPokemon.base.Speed >= enemyPokemon.base.Speed) {
      setEnemyAttack(true);
      setPlayerAttack(false);
    } else {
      setEnemyAttack(false);
      setPlayerAttack(true);
    }
  };

  return (
    <main className="battle">   
      <div className="battle-buttons">
        <button disabled={!GameOver || started} onClick={handleClickNewGame}>New Game {GameOver}</button>
        <button disabled={started} onClick={handleClickStartGame}>Start Game {started}</button>
      </div>
      <div className="battle-cards">
      <PlayerPokemon attack={attackPlayer} pokemon={playerPokemon} name="Player"/>
        <a
          href="https://www.freepnglogos.com/pics/vs"
          title="Image from freepnglogos.com"
        >
          <img
            src="https://www.freepnglogos.com/uploads/vs-png/vs-fire-icon-png-logo-Image-10.png"
            width="200"
            alt="vs fire icon png logo"
          />
        </a>
        <PlayerPokemon attack={attackEnemy} pokemon={enemyPokemon} name="Enemy"/>
      </div>
      {gameOver?<GameOver winner={ winner } loser={ loser } rounds={ rounds }/>:null}
    </main>
  );
}
