import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function ProductsNav() {
  return (
    <Nav>
      <div className="list">
        <ul>
          <NavLink to="/products">
            <div>top</div>
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/products">
            <div>bottom</div>
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/products">
            <div>outer</div>
          </NavLink>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: left;

  .list {
    display: flex;
  }
  .list a {
    text-decoration: none;
    display: flex;
    color: black;
    font-family: "Nanum Myeongjo";
  }
`;
