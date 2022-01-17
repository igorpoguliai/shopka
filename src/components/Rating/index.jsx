import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { Rating, Rate } from "./styled";

export default function Stars() {
  const rate = 2;

  return (
    <>
      {new Array(1, 2, 3, 4, 5).map((rating) => (
        <Rating active={rating <= rate}>
          <StarIcon />
        </Rating>
      ))}
      <Rate>4.77</Rate>
    </>
  );
}
