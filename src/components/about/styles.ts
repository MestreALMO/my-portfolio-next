import styled from "styled-components";

export const Container = styled.div`
  background: var(--gray-900);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0 4em;

  div {
    margin: 1em;
    max-width: 46em;

    p {
      text-indent: 3rem;
      font-size: 1.6rem;
      color: var(--gray-400);
    }
  }
`;
