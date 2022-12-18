import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  // justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 25px;
`;

const CategoryPill = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  height: 40px;
  border: 1px solid var(--lightGray);
  border-radius: 50px;
  color: ${(props) =>
    props.isCurrentlySelected ? "var(--white)" : "var(--black)"};
  background-color: ${(props) =>
    props.isCurrentlySelected ? "var(--green)" : ""};
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: var(--lightGray);
    cursor: pointer;
  }
`;

const CategoryText = styled.div`
  padding: 15px;
  font-size: 1.4rem;
  font-weight: 500;
`;

const MoreText = styled.button`
  font-size: 1.4rem;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  font-weight: 500;
  border: 1px solid var(--lightGray);
  border-radius: 50px;
  color: var(--black);
  align-self: center;
  &:hover {
    background-color: var(--lightGray);
    cursor: pointer;
  }
`;

export default function CategoryList({
  onClick,
  categories,
  activeCategories,
  getCategories,
}) {
  const categoryCount = categories?.edges.length;
  const hasMoreCategories =
    !categories || categories?.totalCount > categoryCount;

  return (
    <CategoryContainer>
      {categories?.edges?.map((category) => (
        <CategoryPill
          onClick={() => onClick(category.node.id)}
          key={category.node.id}
          isCurrentlySelected={activeCategories.includes(category.node.id)}
        >
          <CategoryText>{category.node.name}</CategoryText>
        </CategoryPill>
      ))}
      {hasMoreCategories && (
        <MoreText
          onClick={() =>
            getCategories({
              variables: { first: categoryCount + 10 },
            })
          }
        >
          More...
        </MoreText>
      )}
    </CategoryContainer>
  );
}
