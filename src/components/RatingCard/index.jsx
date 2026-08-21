import { Button, Heading } from "react-aria-components";
import StarRating from "../StarRating";
import ReviewModal from "../ReviewModal";
import { useState } from "react";

export default function RatingCard({ title, year, nextFilm }) {
  const [rating, setRating] = useState(0);

  return (
    <form className="w-75 flex flex-col items-center gap-4 p-8 rounded-2xl bg-gray-600 text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
      <Heading className="font-bold text-xl">{title}</Heading>
      <Heading className="-mt-3 text-sm">{year}</Heading>
      <StarRating value={rating} onChange={setRating} />
      <ReviewModal />
      <Button
        type="button"
        className="w-full h-10 mt-4 hover:cursor-pointer bg-red-500 text-white rounded-lg"
        onPress={() => nextFilm()}
      >
        Nunca assisti esse filme
      </Button>
      <Button
        type="submit"
        isDisabled={rating === 0}
        className="w-full h-10 hover:cursor-pointer bg-green-500 text-white rounded-lg disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        onPress={(e) => nextFilm(e)}
      >
        Salvar
      </Button>
    </form>
  );
}
