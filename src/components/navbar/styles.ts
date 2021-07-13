import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: var(--gray-800);
  color: var(--gray-300);
  width: 100%;
  opacity: 0.9;
  z-index: 9999;
  transition: opacity 0.6s;

  &:hover {
    opacity: 1;
  }
`;

export const ContainerSpacing = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 860px;

  @media (min-width: 600px) {
    padding: 0 2rem;
    justify-content: space-between;
  }
`;

export const MyName = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`;

export const Buttons = styled.ul`
  display: flex;
  align-items: center;

  li {
    button {
      font-size: 1rem;
      padding: 0.75em;
      border: none;
      background: inherit;
      color: inherit;
      transition: background 0.6s, color 0.6s;

      &:hover {
        background: var(--black);
        color: var(--white);
      }
    }
  }
`;
