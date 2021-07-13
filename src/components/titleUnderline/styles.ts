import styled from "styled-components";

export const Container = styled.h2`
  font-size: 4rem;
  color: var(--gray-300);

  &:after {
    content: "";
    width: 60%;
    height: 0.2rem;
    background: #c82333;
    display: block;
    margin: 0.4rem auto;
    transition: width 0.2s ease-in-out, color 0.2s;
    margin-bottom: 2.4rem;
  }

  &:hover {
    color: var(--white);
  }

  &:hover:after {
    width: 100%;
  }
`;
