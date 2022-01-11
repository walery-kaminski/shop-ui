import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useApp } from "../../Context";
import Card from "../card/Card";
import * as styled from "./Styled";

export default function Home() {
  let params = useParams();
  let navigate = useNavigate();
  const { products, searchResults, search, setSearchTerm, searchTerm } =
    useApp();

  useEffect(() => {
    if (
      params.searchTerm &&
      params.searchTerm !== "" &&
      searchTerm !== params.searchTerm
    ) {
      search(params.searchTerm);
      setSearchTerm(params.searchTerm);
    } else if (params.productSlug) {
      const prod = products.find(
        (product) => product.slug === params.productSlug
      );
      if (!prod) navigate("404");
    }
  }, [params, search, products, navigate, setSearchTerm, searchTerm]);

  const EmptyFillerProducts = () => {
    return (
      <>
        {[...Array(5)].map((e, i) => (
          <styled.EmptyCard data-testid="empty-products" key={i} />
        ))}
      </>
    );
  };

  return (
    <styled.Wrapper data-testid="home-wrapper">
      {params.searchTerm ? (
        <>
          <h3 className="title" id="search-results-title">
            Showing search results for "{params.searchTerm}"
          </h3>
          {searchResults.length === 0 ? (
            <p className="none" id="search-results">
              Sorry, your search term did not match any results...
            </p>
          ) : (
            <styled.Products data-testid="products" id="search-results">
              {searchResults.map((e, i) => (
                <Card key={i} product={e} />
              ))}
              <EmptyFillerProducts />
            </styled.Products>
          )}
        </>
      ) : (
        <styled.Products data-testid="products">
          {products.map((e, i) => (
            <Card key={i} product={e} />
          ))}
          <EmptyFillerProducts />
        </styled.Products>
      )}
    </styled.Wrapper>
  );
}
