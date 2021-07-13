import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  background: url("/bgHomeBlured.png") no-repeat center;
  background-size: cover;
  margin-top: 2.7em;
  padding-bottom: 3rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Info = styled.div`
  padding: 1rem;
  margin: 0 auto;
  align-items: center;
  max-width: 310px;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }

  img {
    border-radius: 50%;
  }
`;
