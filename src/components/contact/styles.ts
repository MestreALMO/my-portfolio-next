import styled from "styled-components";

export const Container = styled.div`
  padding: 3em 1em 1.2em;
  background: var(--black);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--gray-600);
  padding: 25px;
  border-radius: 10%;
  max-width: 400px;
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  margin-bottom: 10px;
  border-radius: 10%;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    background-color: #c82333;
  }

  @media screen and (max-width: 410px) {
    flex-direction: column;
  }
`;

export const Squares = styled.div`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    color: #fff;
    margin: 0 0.4rem 0 0.4rem;
    background-color: #003561;
    border-radius: 10%;
    transition: background-color 0.2s;
    margin-bottom: 8px;

    &::first-child {
      margin-bottom: 0;
    }

    &::last-child {
      margin-bottom: 0;
    }

    &:hover {
      background-color: #c82333;
    }

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;

      figcaption {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #000000;
        border-radius: 10%;
        width: 90%;
        margin: 0.1rem;
      }
    }
  }
`;
