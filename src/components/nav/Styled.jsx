import styled from "styled-components";

export const StaticNav = styled.nav`
  width: 100%;
  height: 45px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .auth {
    margin: 0 5px;
    padding: 2px 20px;
    background: var(--primary);
    border: solid 1px var(--secondary);
    border-radius: 1000px;
    font-family: var(--font);
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: var(--shadowTwo);
      background: var(--accentTwo);
      border: solid 1px var(--accentTwo);
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavLinksSm = styled.div`
  button {
    display: none;
    background-color: transparent;
    font-weight: 500;
    font-family: var(--font);
    text-transform: uppercase;

    span {
      font-size: 1.2em;
    }

    @media (max-width: 600px) {
      display: block;
    }

    &hover {
      cursor: pointer;
    }
  }
`;

export const PopupLinks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--white);

  .navLinks {
    width: 150px;
    border: 2px solid var(--accent);
    font-size: 1.2em;
  }

  .closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: orangered;
    border: none;
    border-radius: 1000px;
    color: var(--white);

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavLink = styled.button`
  height: fit-content;
  padding: 2px 20px;
  display: inline-block;
  background-color: transparent;
  border: none;
  border-left: 2px solid var(--accent);
  font-family: var(--font);

  &:last-of-type {
    border-right: 2px solid var(--accent);
  }

  &:after {
    content: "";
    width: 0;
    height: 2px;
    margin-left: -60px;
    padding: 0 20px;
    display: block;
    transition: margin 0s ease, width 0.5s ease;
  }

  &:hover:after {
    width: 100%;
    margin-left: -20px;
    background: var(--accent);
  }
`;

export const StickyNav = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
  background-color: var(--accentTwo);
  box-shadow: var(--shadow);
`;

export const Search = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 55px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 60%;
    margin: 0 1%;
    padding: 0.5% 0 0.5% 10px;
    font-family: var(--font);
    border-radius: 1000px;
    border: none;
    outline: none;
    font-size: 0.9em;

    &:placeholder-shown {
      font-size: 12px;
    }

    &:active,
    &:focus {
      box-shadow: var(--shadowTwo);
    }
  }

  button {
    margin: 0 1%;
    padding: 0.5%;
    border-radius: 1000px;
    font-family: var(--font);
    font-size: 0.8em;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: var(--shadowTwo);
    }
  }

  button:first-of-type {
    width: 17%;
    background-color: var(--secondary);
    font-family: var(--font);
    color: var(--white);
  }

  button:last-of-type {
    width: 25%;
  }
`;
