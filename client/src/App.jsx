import { useState } from "react";
import "./App.css";
import FilmList from "./components/FilmList";
import AddFilmForm from "./components/AddFilmForm";

function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      name: "The Matrix",
      release_year: 1999,
      category: "Azione",
      rating: 8.7,
      duration: 136
    },
    {
      id: 2,
      name: "Monsters & Co.",
      release_year: 2001,
      category: "Commedia Animata",
      rating: 9.3,
      duration: 108
    },
    {
      id: 3,
      name: "Chiamami col tuo nome",
      release_year: 2017,
      category: "Romantico",
      rating: 6.3,
      duration: 92
    },
    {
      id: 4,
      name: "Troy",
      release_year: 2004,
      category: "Tragedia",
      rating: 9.7,
      duration: 123
    }]);

  function handleDeleteFilm(id) {
    setFilms(
      films.filter((film)=>{
        return film.id !== id;
      })
    )
  }
  
  function handleAddFilm(newFilm){
    setFilms([...films, newFilm]);
  }

  return (
  <div className="app">
    <header className="app-header">
      <h1>My Movie Vault</h1>
      <p>La mia collezione di film</p>
    </header>
    <AddFilmForm handleAddFilm = {handleAddFilm} />
    <FilmList films={films} handleDeleteFilm={handleDeleteFilm} />
  </div>
);
}

export default App;