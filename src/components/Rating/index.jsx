import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { Rating, Rate } from "./styled";

export default function Stars({ rating }) {
  return (
    <>
      {new Array(1, 2, 3, 4, 5).map((stars) => (
        <Rating key={stars} active={stars <= rating.rate}>
          <StarIcon />
        </Rating>
      ))}
      <Rate>{rating.rate}</Rate>
    </>
  );
}
