import FilmCard from "./FilmCard";

function FilmList({ films, handleDeleteFilm }) {

    console.log("films dentro FilmList:", films);
  return (
    <ul className="film-list">
      {films.map((film) => {
        return (
          <FilmCard
            key={film.id}
            film={film}
            handleDeleteFilm={handleDeleteFilm}
          />
        );
      })}
    </ul>
  );
}

export default FilmList;