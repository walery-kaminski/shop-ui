import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApp } from "../../Context";
import * as styled from "./Styled";

export default function Nav() {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const [openNav, setOpenNav] = useState(false);
  const { view, setView, cart, search, setSearchTerm } = useApp();

  let navigate = useNavigate();

  const handleViewChange = () => {
    if (view === 'home' || view === 'search') {
      navigate('cart');
      setView('cart');
    } else if (view === 'cart') {
      navigate('/');
      setView('home');
    } else {
      navigate('/');
      setView('home');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${searchTermLocal}`);
      setSearchTerm(searchTermLocal);
      search(searchTermLocal);
    }
  };

  const Links = () => {
    return (
      <>
        <styled.NavLink
          className="navLinks"
          onClick={() => {
            setView('home');
            setOpenNav(false);
            navigate('/');
          }}
        >
          Home
        </styled.NavLink>
        <styled.NavLink className="navLinks" onClick={() => setOpenNav(false)}>
          About
        </styled.NavLink>
        <styled.NavLink className="navLinks" onClick={() => setOpenNav(false)}>
          Contact
        </styled.NavLink>
        <styled.NavLink className="navLinks" onClick={() => setOpenNav(false)}>
          Offers
        </styled.NavLink>
      </>
    );
  };

  return (
    <>
      <styled.StaticNav data-testid="nav-wrapper">
        <styled.NavLinks>
          <Links />
        </styled.NavLinks>
        <styled.NavLinksSm>
          <button onClick={() => setOpenNav(true)} id="menu">
            <span>&#8801;</span> Menu
          </button>
          <styled.PopupLinks open={openNav} id="popup-links">
            <Links />
            <button className="closeBtn" onClick={() => setOpenNav(false)}>
              x
            </button>
          </styled.PopupLinks>
        </styled.NavLinksSm>
        <div>
          <button className="auth">Login</button>
          <button className="auth">Register</button>
        </div>
      </styled.StaticNav>
      <styled.StickyNav>
        <styled.Search>
          <input
            data-testid="search-input"
            id="search-input"
            placeholder="what are you looking for?"
            type="text"
            onChange={(e) => setSearchTermLocal(e.target.value)}
            onKeyDown={handleEnter}
            required
          />
          <button
            data-testid="search-button"
            onClick={() => {
              navigate(`/search/${searchTermLocal}`);
              search(searchTermLocal);
              setSearchTerm(searchTermLocal);
            }}
          >
            Search
          </button>
          <button onClick={() => handleViewChange()} data-testid="cart-home">
            {view === 'home' || view === 'search'
              ? `Cart [ ${cart.length} ]`
              : 'Home'}
          </button>
        </styled.Search>
      </styled.StickyNav>
    </>
  );
}
