import { useState } from "react";

function AddFilmForm({handleAddFilm}) {
  const [name, setName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    console.log(name);
    console.log(releaseYear);

    const newFilm = {
      id: Date.now(),
      name: name,
      release_year: Number(releaseYear),
      category: "Da definire",
      rating: 0,
      duration: 0
    };

    handleAddFilm(newFilm);
    setName("");
    setReleaseYear("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome film</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label>Anno di uscita</label>
        <input
          type="number"
          value={releaseYear}
          onChange={(event) => setReleaseYear(event.target.value)}
        />
      </div>

      <button type="submit">Aggiungi film</button>
    </form>
  );
}

export default AddFilmForm;