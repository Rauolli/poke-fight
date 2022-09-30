import { useNavigate } from "react-router-dom";

export default function Pagination() {
  const navigate = useNavigate();
  const numId = parseInt(id);
  return (
    <div className="pagination">
      <button
        className="previous"
        disabled={numId < 2}
        onClick={() => navigate(`/Pokemon/${numId - 1}`)}
      >
        <span>Nr. {thisPost.id - 1}</span>
      </button>
      <button className="home" onClick={() => navigate(`/`)}>
        <span>Pokedex</span>
      </button>
      <button
        className="next"
        disabled={numId > 150}
        onClick={() => navigate(`/Pokemon/${numId + 1}`)}
      >
        <span>Nr. {thisPost.id + 1}</span>
      </button>
    </div>
  );
}
