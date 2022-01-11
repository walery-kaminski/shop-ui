import styled from "styled-components";

export const AddToCart = styled.button`
  width: 100%;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.added ? "forestgreen" : "var(--secondary)"};
  border-radius: 1000px;
  font-family: var(--font);
  color: var(--white);
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    box-shadow: var(--shadowTwo);
  }
`;

export const IncreaseDecrease = styled.div`
  width: fit-content;
  margin: 0 auto;
  transition: all 0.5s ease;

  button {
    width: 60px;
    height: 30px;
    border-radius: 1000px;
    font-family: var(--font);
    font-weight: 700;
    color: var(--white);

    &:hover {
      cursor: pointer;
      box-shadow: var(--shadowTwo);
    }
  }

  span {
    margin: 0 15px;
    padding: 2px 15px;
    border: 1px solid var(--secondary);
    border-radius: 1000px;
  }

  button:first-of-type {
    background-color: forestgreen;
  }

  button:last-of-type {
    background-color: orangered;
  }
`;
