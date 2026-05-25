function FilmCard({ film, handleDeleteFilm }) {
  return (
    <li className="film-card">
      <h2>{film.name}</h2>

      <div className="film-details">
        <p>Anno: {film.release_year}</p>
        <p>Categoria: {film.category}</p>
        <p>Rating: {film.rating}</p>
        <p>Durata: {film.duration} min</p>
      </div>

      <button
        className="delete-button"
        onClick={() => handleDeleteFilm(film.id)}
      >
        Cancella
      </button>
    </li>
  );
}

export default FilmCard;