import styled from "styled-components";

export const Container = styled.div`
  background: var(--black);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0 4em;

  div {
    margin: 1em;
    max-width: 36em;

    p {
      text-indent: 2rem;
      font-size: 1rem;
    }
  }
`;
