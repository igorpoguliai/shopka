import { StyledCategories, Button } from "./styled";

export default function Categories({
  handleCategoryClick,
  activeCategory,
  categories,
}) {
  return (
    <StyledCategories>
      Categories
      <Button
        onClick={() => handleCategoryClick(null)}
        active={!activeCategory}
      >
        All
      </Button>
      {categories?.map((category) => (
        <Button
          onClick={() => handleCategoryClick(category)}
          key={category}
          active={category === activeCategory}
        >
          {category}
        </Button>
      ))}
    </StyledCategories>
  );
}
