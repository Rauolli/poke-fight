import { useState, useEffect } from "react";
export default function GameOver({ winner, loser, rounds }) {
  const [visible, setVisible] = useState(true);
  const [won, setWon] = useState("");
  const [lost, setLost] = useState("");
  const [rnds, setRnds] = useState(0);

  useEffect(() => {
    setRnds(`After ${rounds} rounds`);
    if (winner.length > 1) {
      setWon(
        `The winners are: ${winner[0].name.english} and ${winner[1].name.english}`
      );
      setLost("There are no loser!");
    } else {
      setWon(`The winner is: ${winner[0].name.english}`);
      setLost(`The loser is: ${loser[0].name.english}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, won, lost, rnds]);

  const handleClose = (e) => {
    e.preventDefault();
    setRnds(0);
    setWon("");
    setLost("");
    setVisible(false);
  };

  return (
    <>
      <div className={visible ? "game-over" : "not-visible"}>
        <button onClick={handleClose}>X</button>
        <h1>Game Over!</h1>
        <p>{rnds}</p>
        <p> {won} </p>
        <p>{lost}</p>
      </div>
    </>
  );
}
