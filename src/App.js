import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Pokedex from "./Components/Pokedex";
import OnePokemon from "./Components/OnePokemon";

export default function App() {
  const [posts, setPosts] = useState([]);
  const API = "https://cookbook-api.onrender.com";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Pokedex posts={posts} />} />
        <Route path="/pokemon/:id" element={<Pokedex posts={posts} />} />
        <Route
          path="/Pokemon/:id/:info"
          element={<OnePokemon posts={posts} />}
        />
        <Route path="*" element={<div>404 Seite nicht gefunden</div>} />
      </Routes> */}
    </>
  );
}
