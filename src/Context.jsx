import React, { useContext, useState, useEffect } from "react";

import Products from "./components/mock/products.json";
import { Slugify } from "./components/helpers/helpers";

const Context = React.createContext();

export function useApp() {
  return useContext(Context);
}

export const StateProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [view, setView] = useState("home");
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let data = Products.map((product) => product.category);
    data = [...new Set(data)];
    setCategories(data);
  }, []);

  useEffect(() => {
    let slugified = Products.map(function (el) {
      let o = Object.assign({}, el);
      o.slug = Slugify(o.name);
      return o;
    });
    let shortDesc = slugified.map(function (el) {
      let o = Object.assign({}, el);
      o.shortDesc = el.description.substring(0, 25) + "...";
      return o;
    });
    let price2Decimal = shortDesc.map(function (el) {
      let o = Object.assign({}, el);
      o.price = el.price.toFixed(2);
      return o;
    });
    setProducts(price2Decimal);
  }, []);

  function search(term) {
    let resultsFromName = Products.filter((product) => {
      return product.name.toLowerCase().includes(term.toLowerCase());
    });
    let resultsFromDescription = Products.filter((product) => {
      return product.description.toLowerCase().includes(term.toLowerCase());
    });
    let results = resultsFromName.concat(resultsFromDescription);
    results = [...new Set(results)];
    setSearchResults(results);
    setView("search");
  }

  function addToCart(item) {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      cart[index].quantity += 1;
      setCart([...cart]);
    }
  }

  function removeFromCart(item) {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      cart[index].quantity -= 1;
      if (cart[index].quantity === 0) {
        cart.splice(index, 1);
      }
      setCart([...cart]);
    } else {
      // dialog box
      console.log("item not found");
    }
  }

  return (
    <Context.Provider
      value={{
        view,
        categories,
        products,
        search,
        searchResults,
        cart,
        setView,
        addToCart,
        removeFromCart,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </Context.Provider>
  );
};
