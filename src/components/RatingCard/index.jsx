import { Button, Slider } from "react-aria-components";

export default function RatingCard({ title, year, nextFilm }) {
  return (
    <div className="w-75 flex flex-col items-center gap-4 p-8 rounded-2xl bg-gray-600 text-white">
      <h2 className="font-bold text-xl">{title}</h2>
      <h3 className="-mt-3 text-sm">{year}</h3>
      <Slider></Slider>
      <Button className="w-full h-10 hover:cursor-pointer bg-gray-200 text-black rounded-lg">+ Add Review</Button>
      <Button className="w-full h-10 mt-4 hover:cursor-pointer bg-red-500 text-white rounded-lg">Nunca assisti esse filme</Button>
      <Button className="w-full h-10 hover:cursor-pointer bg-green-500 text-white rounded-lg" onClick={() => nextFilm()}>Salvar</Button>
    </div>
  );
}
