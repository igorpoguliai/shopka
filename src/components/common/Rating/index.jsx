import { ReactComponent as StarIcon } from "./icons/star.svg";
import { Rating, Rate } from "./styled";

export default function Stars({ rating }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((stars) => (
        <Rating key={stars} active={stars <= Math.round(rating.rate)}>
          <StarIcon />
        </Rating>
      ))}
      <Rate>{rating.rate}</Rate>
    </>
  );
}
