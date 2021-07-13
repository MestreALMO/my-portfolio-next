import styled from "styled-components";

export const Container = styled.div`
  background: var(--gray-900);
  width: 100%;
  padding: 3em 1em 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  figure {
  }
`;

export const Element = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.6em 1.6em;
  background: var(--gray-700);
  border: solid var(--gray-700) 0.3rem;
  transition: border 0.5s;

  &:hover {
    border: solid var(--red-700) 0.3rem;
  }

  figure {
    max-width: 360px;

    Image {
    }
    figcaption {
      display: flex;
      justify-content: center;
      padding: 0 0.3rem 0.3rem;
      background: var(--black);
    }
  }
`;
export const Elements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
