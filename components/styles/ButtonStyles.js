import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.primary ? "var(--black)" : "var(--green)"};
    color: var(--offWhite);
    font-weight: 500;
    border: 0;
    border-radius: 9999px;
    font-size: 1rem;
    padding: 1rem;
    &:hover {
      background-color: var(--lightGrey);
      transition: background-color .20s ease-in;
      color: var(--black);
    }
`;

export default StyledButton