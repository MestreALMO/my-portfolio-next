import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3em 1em 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
  }
`;

export const Frame = styled.a`
  text-decoration: none;
  border-radius: 4px;
  margin: 0 15px 0 15px;

  figure {
    background-color: #333;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 10px 100px #c82333;
    }

    figcaption {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 4px 4px 4px;
      color: #fff;
      font-weight: 800;
    }

    p {
      background-color: #888;
      color: #000;
      padding: 4px;
      text-indent: 16px;
    }
  }

  @media only screen and (max-width: 1300px) {
    img {
      width: 400px;
    }
  }

  @media only screen and (max-width: 900px) {
    img {
      width: 570px;
    }
    margin: 15px 0 15px 0;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 320px;
    }
    margin: 15px 0 15px 0;
  }
`;
