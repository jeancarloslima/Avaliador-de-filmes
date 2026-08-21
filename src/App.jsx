import { useState } from "react";
import RatingCard from "./components/RatingCard";
import { Heading } from "react-aria-components";

function App() {
  const [currentFilm, setCurrentFilm] = useState(0);
  const [listIsEnd, setListIsEnd] = useState(false);

  const filmsList = [
    {
      year: "2014",
      title: "Interstellar",
    },
    {
      year: "1999",
      title: "Fight Club",
    },
    {
      year: "2019",
      title: "Parasite",
    },
    {
      year: "2023",
      title: "Barbie",
    },
    {
      year: "2016",
      title: "La La Land",
    },
    {
      year: "2025",
      title: "Sinners",
    },
    {
      year: "2026",
      title: "Obsession",
    },
    {
      year: "2026",
      title: "Project Hail Mary",
    },
    {
      year: "2014",
      title: "Whiplash",
    },
    {
      year: "1998",
      title: "The Truman Show",
    },
    {
      year: "1994",
      title: "Pulp Fiction",
    },
    {
      year: "1989",
      title: "Dead Poets Society",
    },
  ];

  const nextFilm = (e) => {
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
          <Heading className="max-w-xl text-2xl font-bold text-center">
            Para começar em nossa plataforma, avalie esses filmes
          </Heading>
          <RatingCard
            key={filmsList[currentFilm].title}
            title={filmsList[currentFilm].title}
            year={filmsList[currentFilm].year}
            nextFilm={nextFilm}
          />
        </>
      ) : (
        <Heading className="max-w-xl text-2xl font-black text-center">
          Fim da lista. Com essas avaliações poderemos fazer recomendações
          melhores para você. <br />
          Aguarde...
        </Heading>
      )}
    </div>
  );
}

export default App;
