import styled from "styled-components";

export const Container = styled.h2`
  font-size: 40px;

  &:after {
    content: "";
    width: 60%;
    height: 0.2rem;
    background: #c82333;
    display: block;
    margin: 0.4rem auto;
    transition: all 0.2s ease-in-out;
    margin-bottom: 2.4rem;
  }

  &:hover:after {
    width: 100%;
  }
`;
