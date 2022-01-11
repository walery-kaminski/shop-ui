import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useApp } from "../../../Context";
import { AddToCart, IncreaseDecrease } from "../productBtn/ProductBtn";
import * as styled from "./Styled";

export default function Detail({ product, open }) {
  let navigate = useNavigate();

  const { view } = useApp();

  useEffect(() => {
    const handleEsc = (event) => event.keyCode === 27 && open(false);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const Button = () => {
    return view === "home" || view === "search" ? (
      <AddToCart product={product} />
    ) : view === "cart" ? (
      <IncreaseDecrease product={product} />
    ) : null;
  };

  return (
    <styled.Wrapper
      onClick={() => {
        open(false);
        navigate("/");
      }}
      data-testid="detail-wrapper"
    >
      <styled.Product
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <styled.CloseBtn
          onClick={() => {
            open(false);
            navigate("/");
          }}
        >
          x
        </styled.CloseBtn>
        <styled.Title data-testid="detail-title">{product.name}</styled.Title>
        <styled.InfoWrapper data-testid="detail-info">
          <styled.ImageWrapper>
            <img src={product.image} alt={product.title} />
          </styled.ImageWrapper>
          <styled.Info>
            <h3>Description:</h3>
            <styled.Description>{product.description}</styled.Description>
            <styled.PriceCategoryWrapper>
              <p>Price: € {product.price}</p>
              <styled.Category>{product.category}</styled.Category>
            </styled.PriceCategoryWrapper>
            <styled.AddToCartBtn>
              <Button />
            </styled.AddToCartBtn>
          </styled.Info>
        </styled.InfoWrapper>
      </styled.Product>
    </styled.Wrapper>
  );
}
