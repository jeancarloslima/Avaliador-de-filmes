import { Button, Heading } from "react-aria-components";
import StarRating from "../StarRating";

export default function RatingCard({ title, year, nextFilm }) {
  return (
    <div className="w-75 flex flex-col items-center gap-4 p-8 rounded-2xl bg-gray-600 text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
      <Heading className="font-bold text-xl">{title}</Heading>
      <Heading className="-mt-3 text-sm">{year}</Heading>
      <StarRating />
      <Button className="w-full h-10 hover:cursor-pointer bg-gray-200 text-black rounded-lg">+ Add Review</Button>
      <Button type="submit" className="w-full h-10 mt-4 hover:cursor-pointer bg-red-500 text-white rounded-lg" onClick={() => nextFilm()}>Nunca assisti esse filme</Button>
      <Button type="submit" className="w-full h-10 hover:cursor-pointer bg-green-500 text-white rounded-lg" onClick={() => nextFilm()}>Salvar</Button>
    </div>
  );
}
