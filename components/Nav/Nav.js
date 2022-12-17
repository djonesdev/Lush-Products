import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 25px;
`;

const CategoryPill = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid var(--lightGray);
  border-radius: 50px;
  color: var(--black);
  transition: background-color .20s ease-in;
  &:hover {
    background-color: var(--lightGray);
    cursor: pointer;
  }
`;

const CategoryText = styled.div`
  padding: 15px;
  font-size: 1rem;
  font-weight: 500;
`;

const MoreText = styled.button`
  font-size: 1rem;
  height: 40px;
  border: 1px solid var(--lightGray);
  border-radius: 50px;
  color: var(--black);
`

export default function CategoryList({ onClick, categories }) {
  return (
    <CategoryContainer>
      {categories?.edges?.map((category) => (
        <CategoryPill onClick={() => onClick(category.node.name)} key={category.node.id}>
          <CategoryText>{category.node.name}</CategoryText>
        </CategoryPill>
      ))}
      <MoreText>More...</MoreText>
    </CategoryContainer>
  );
}
