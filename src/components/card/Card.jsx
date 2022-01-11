import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useApp } from "../../Context";
import { AddToCart, IncreaseDecrease } from "./productBtn/ProductBtn";
import Detail from "./detail/Detail";
import * as styled from "./Styled";

export default function Card(props) {
  const [detailOpen, setDetailOpen] = useState(false);
  const { view, setView } = useApp();
  const { product } = props;
  const { name, price, image, shortDesc, category } = product;

  let params = useParams();

  useEffect(() => {
    if (params.productSlug && params.productSlug === product.slug)
      setDetailOpen(true);
  }, [params, product]);

  const Button = () => {
    return view === "home" || view === "search" || params.productSlug ? (
      <AddToCart product={product} />
    ) : view === "cart" ? (
      <IncreaseDecrease product={product} />
    ) : null;
  };

  return (
    <>
      {detailOpen && <Detail product={product} open={setDetailOpen} />}
      <Link to={`/products/${product.slug}`}>
        <styled.Wrapper
          data-testid="card-wrapper"
          id="product"
          onClick={() => {
            setDetailOpen(true);
            setView("home");
          }}
        >
          <styled.Title>{name}</styled.Title>
          <styled.ImageWrapper>
            <img src={image} alt={name} />
          </styled.ImageWrapper>
          <styled.Description>{shortDesc}</styled.Description>
          <styled.PriceCategoryWrapper>
            <p>€ {price}</p>
            <styled.Category>{category}</styled.Category>
          </styled.PriceCategoryWrapper>
          <Button />
        </styled.Wrapper>
      </Link>
    </>
  );
}
