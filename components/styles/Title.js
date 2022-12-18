import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  p {
    background: var(--black);
    display: inline;
    line-height: 1.3;
    font-size: 2rem;
    text-align: center;
    color: white;
    font-weight: 500;
    padding: 0 1rem;
  }
`;

export default Title;
