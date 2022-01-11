import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(239, 246, 255, 0.3);
  backdrop-filter: blur(10px) saturate(200%);
  -webkit-backdrop-filter: blur(10px) saturate(200%);
  cursor: pointer;
`;

export const Product = styled.div`
  width: fit-content;
  max-width: 90%;
  margin: 10px;
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--greyTwo);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;
  cursor: default;
`;

export const CloseBtn = styled.button`
  padding: 0 13px;
  float: right;
  background-color: orangered;
  border: none;
  border-radius: 1000px;
  font-weight: 500;
  font-family: var(--font);
  font-size: 1.5em;
  color: var(--white);

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  max-width: 350px;
  min-width: 230px;
  min-height: 420px;
  padding: 0 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  overflow: hidden;
  border-right: 1px solid var(--accentTwo);

  img {
    width: 100%;
    display: inline-block;
  }

  @media (max-width: 767px) {
    min-height: 0;
    border-right: none;
  }
`;

export const Info = styled.div`
  position: relative;
  max-width: 350px;
  min-width: 230px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  margin: 5px 0;
`;

export const PriceCategoryWrapper = styled.div`
  margin: 20px 0 40px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid var(--greyTwo);
`;

export const Category = styled.p`
  width: fit-content;
  padding: 2px 10px;
  background: var(--greyTwo);
  border-radius: 1000px;
  font-size: 0.8em;
  text-transform: uppercase;
`;

export const AddToCartBtn = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 20px 0 0 0;
`;
