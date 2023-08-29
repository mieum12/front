import { Form, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function MainNav() {
  return (
    <Nav>
      <div>
        <ul>
          <NavLink to="/">9UCCI</NavLink>
        </ul>
        <ul>
          <NavLink to="/products">SHOP</NavLink>
        </ul>
        <ul>
          <NavLink to="/auth?mode=login">LOGIN/JOIN</NavLink>
        </ul>
        <ul>
          <Form action="/logout" method="post">
            <button>Logout</button>
          </Form>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.div``;
