import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  height: fit-content;
  margin: 10px;
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--greyTwo);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const Description = styled.p`
  margin: 5px 0;
  font-size: 0.9em;
`;

export const PriceCategoryWrapper = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.p`
  width: fit-content;
  padding: 2px 10px;
  background: var(--greyTwo);
  border-radius: 1000px;
  font-size: 0.8em;
  text-transform: uppercase;
`;
