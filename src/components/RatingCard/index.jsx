export default function RatingCard({ title, nextFilm }) {
  return (
    <div className="bg-gray-600 text-white">
      <h1>{title}</h1>
      <button className="hover:cursor-pointer" onClick={() => nextFilm()}>Salvar</button>
    </div>
  );
}
