import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1.5em;
  display: grid;
  width: 100%;

  .codeLong {
    filter: blur(4px);
  }

  div {
    grid-area: 1 / 1;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
  }

  .myPhoto {
    border-radius: 50%;
    display: block;
    max-height: 300px;
    max-width: 300px;
    margin: 0 auto 1em;
    /* width: 100%; */
    border: solid gray 2px;
  }
`;
