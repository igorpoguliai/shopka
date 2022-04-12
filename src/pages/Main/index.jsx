import Header from "../../components/Header";
import Card from "./Card";
import Loading from "../../components/common/Spinner";
import Select from "../../components/common/Select";
import Categories from "./Categories";
import { Main, CardsContainer, MainContainer, Aside, Title } from "./styled";
import { Flex } from "../../components/common/styled";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getCardsAction,
  setActiveCategoryAction,
  setSortCardsAction,
} from "../../redux/products/action";
import { SORT_TYPE } from "../../utils/constants";
import { sortProducts } from "./helpers";

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { products, categories, activeCategory, loading, activeSort } =
    useSelector(({ cards }) => cards);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCardsAction());
  }, []);

  function handleCardClick(id) {
    navigate(`/card/${id}`);
  }

  function handleCategoryClick(category) {
    dispatch(setActiveCategoryAction(category));
  }

  function handleSortClick(event) {
    dispatch(setSortCardsAction(event.target.value));
  }

  function handleSelectClick() {
    setIsOpen(!isOpen);
  }

  const filterCardsToCategory = activeCategory
    ? products?.filter((item) => item.category === activeCategory)
    : products;

  const options = [
    {
      label: "cheap to expensive",
      value: SORT_TYPE.CHEAP_TO_EXP,
    },
    {
      label: "expensive to cheap",
      value: SORT_TYPE.EXP_TO_CHEAP,
    },
    {
      label: "rating",
      value: SORT_TYPE.RATING,
    },
  ];

  const sorted = sortProducts(filterCardsToCategory, activeSort);

  return (
    <>
      <Header />
      {!loading && products ? (
        <MainContainer>
          <Aside>
            <Categories
              handleCategoryClick={handleCategoryClick}
              activeCategory={activeCategory}
              categories={categories}
            />
            <Flex column>
              <Title>SORT BY</Title>
              <Select
                Icon={ArrowIcon}
                options={options}
                value={activeSort}
                onChange={handleSortClick}
                onClick={handleSelectClick}
                open={isOpen}
              />
            </Flex>
          </Aside>
          <CardsContainer>
            <Main>
              {sorted.map((item) => (
                <Card key={item.id} product={item} onClick={handleCardClick} />
              ))}
            </Main>
          </CardsContainer>
        </MainContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}
