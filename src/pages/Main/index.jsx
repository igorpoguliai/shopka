import Header from "../../components/Header";
import Card from "./Card";
import {
  Main,
  Container,
  Aside,
  Button,
  Sort,
  Select,
  Block,
  Wrapper,
} from "./styled";
import { ReactComponent as Arrow } from "./icons/arrow.svg";
import Loading from "../../components/common/Spinner";
import { Flex } from "../../components/common/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getCardsAction } from "../../redux/products/action";
import { setActiveCategoryAction } from "../../redux/products/action";

export default function MainPage() {
  const dispatch = useDispatch();
  const { products, categories, activeCategory } = useSelector(
    ({ cards }) => cards
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCardsAction());
  }, []);

  function handleCardClick(id) {
    navigate(`/card/${id}`);
  }

  const filterCardsToCategory = activeCategory
    ? products?.filter((item) => item.category === activeCategory)
    : products;

  return (
    <Flex>
      <Header />
      <Aside>
        Categories
        <Button
          onClick={() => dispatch(setActiveCategoryAction(null))}
          active={!activeCategory}
        >
          All
        </Button>
        {categories?.map((category) => (
          <Button
            onClick={() => dispatch(setActiveCategoryAction(category))}
            key={category}
            active={category === activeCategory}
          >
            {category[0].toUpperCase() + category.slice(1)}
          </Button>
        ))}
        <Sort>SORT BY</Sort>
        <Wrapper>
          <Select>
            <option>from cheap to expensive</option>
            <option>from expensive to cheap</option>
            <option>by rating</option>
          </Select>
          <Block>
            <Arrow />
          </Block>
        </Wrapper>
      </Aside>
      <Container>
        {products ? (
          <Main>
            {filterCardsToCategory.map((item) => (
              <Card key={item.id} product={item} onClick={handleCardClick} />
            ))}
          </Main>
        ) : (
          <Loading />
        )}
      </Container>
    </Flex>
  );
}
