import { useState } from "react";

function AddFilmForm({handleAddFilm}) {
  const [name, setName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    console.log(name);
    console.log(releaseYear);

    const newFilm = {
      id: Date.now(),
      name: name,
      release_year: Number(releaseYear),
      category: category,
      rating: Number(rating),
      duration: Number(duration)
    };

    handleAddFilm(newFilm);
    setName("");
    setReleaseYear("");
    setCategory("");
    setRating("");
    setDuration("");
  }

  return (

    <section className='form-card'>
      <h2>Aggiungi un film</h2>
      <form className = 'film-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome film</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Anno di uscita</label>
          <input
            type="number"
            value={releaseYear}
            onChange={(event) => setReleaseYear(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Categoria</label>
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Valutazione</label>
          <input
            type="number"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Durata</label>
          <input
            type="number"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </div>

        <button className='submit-button' type="submit">Aggiungi film</button>
      </form>
    </section>
  );
}

export default AddFilmForm;