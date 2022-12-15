import styled from 'styled-components';

const Item = styled.div`
  background: white;
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    justify-items: center;
  }
`;

export default Item;
