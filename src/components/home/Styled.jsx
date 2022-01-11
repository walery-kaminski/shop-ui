import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 78vh;
  margin-bottom: 20px;

  .title {
    margin: 20px 0;
    border-bottom: 2px solid var(--secondary);
    font-size: 1.5rem;
    text-align: center;
  }

  .none {
    font-size: 1.5em;
    font-weight: 500;
    text-align: center;
  }
`;

export const Products = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const EmptyCard = styled.div`
  width: 260px;
`;
