import { useState } from "react";
import RatingCard from "./components/RatingCard";

function App() {
  const [currentFilm, setCurrentFilm] = useState(0);
  const [listIsEnd, setListIsEnd] = useState(false);

  const filmsList = [
    "Interstellar",
    "Fight Club",
    "Parasite",
    "Barbie",
    "La La Land",
    "Sinners",
    "Obsession",
    "Project Hail Mary",
    "Whiplash",
    "The Truman Show",
    "Pulp Fiction",
    "Dead Poets Society",
  ];

  const nextFilm = () => {
    const next = currentFilm + 1;

    if (next < filmsList.length) {
      setCurrentFilm(next);
    } else {
      setListIsEnd(true);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-16 p-4">
      {!listIsEnd ? (
        <>
          <h2 className="text-2xl font-bold text-center">
            Para começar em nossa plataforma, avalie esses filmes
          </h2>
          <RatingCard title={filmsList[currentFilm]} nextFilm={nextFilm} />
        </>
      ) : (
        <h1 className="text-2xl font-black text-center">
          Fim da lista. Com essas avaliações poderemos fazer recomendações
          melhores para você. <br />
          Aguarde...
        </h1>
      )}
    </div>
  );
}

export default App;
