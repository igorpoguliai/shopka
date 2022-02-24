import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MinusIcon } from "./icons/minus.svg";
import { Wrapper, Count } from "./styled";

export default function Counter({ count, min = 1, max, onClick }) {
  return (
    <Wrapper>
      <Count disabled={count <= min} onClick={() => onClick("decrement")}>
        <MinusIcon />
      </Count>
      {count}
      <Count disabled={count >= max} onClick={() => onClick("increment")}>
        <PlusIcon />
      </Count>
    </Wrapper>
  );
}
