import Link from 'next/link';
import styled from 'styled-components';
import useCart from 'utils/useCart';
import CategoryList from '../Nav/Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: var(--black);
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  const { cartItems } = useCart()
  console.log(cartItems, "This should be the cart items")
  return (
  <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link data-testid="home-page-link" href="/">Cosmetics</Link>
        </Logo>
      </div>
      {/* <p>{cartItems.length}</p> */}
    </HeaderStyles>
  );
}