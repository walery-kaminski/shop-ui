import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  margin: 30px auto 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Products = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    max-width: 600px;
  }

  @media (max-width: 400px) {
    max-width: 400px;
  }

  @media (max-width: 320px) {
    max-width: 320px;
  }
`;

export const Cart = styled.div`
  width: 540px;
  max-width: 90vw;
  min-height: 72vh;
  height: fit-content;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--greyTwo);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;

  table {
    margin: 10px 0;
    width: 100%;
    border: 1px solid var(--greyTwo);
    border-collapse: collapse;

    tr:last-of-type {
      background-color: var(--greyTwo);
    }

    td,
    th {
      padding: 10px 15px;
      border: 1px solid var(--greyTwo);
      text-align: center;

      @media (max-width: 600px) {
        padding: 2px 5px;
      }

      @media (max-width: 376px) {
        font-size: 0.8em;
      }
    }

    @media (max-width: 600px) {
      max-width: 70vw;
    }
  }

  &:hover {
    box-shadow: var(--shadowTwo);
  }
`;

export const Title = styled.h3`
  width: 100%;
  border-bottom: 2px solid var(--greyTwo);
  font-size: 1.5rem;
  text-align: center;
`;

export const Checkout = styled.button`
  width: 100%;
  height: 50px;
  margin: 0 0 10px 0;
  background: var(--secondary);
  border-radius: 1000px;
  color: var(--white);
  font-family: var(--font);
  transition: all 0.2s ease;
  text-transform: uppercase;

  &:hover {
    box-shadow: var(--shadowTwo);
  }
`;

export const CartProducts = styled.div``;

export const EmptyCard = styled.div`
  width: 260px;
`;
