import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background: var(--gray-600);
  color: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  opacity: 0.9;
  z-index: 9999;
  transition: opacity 0.6s;

  &:hover {
    opacity: 1;
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
