import styled from "styled-components";

export const Container = styled.div`
  background: var(--black);
  width: 100%;
  padding: 3em 1em 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  figure {
  }
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.6em 1.6em;
  background: var(--gray-700);
  padding: 0.3em;

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
