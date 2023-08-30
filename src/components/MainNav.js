import { Form, NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function MainNav() {
  return (
    <Nav>
      <div>
        <ul className="nav-list">
          <ul>
            <NavLink to="/products">
              <h3>SHOP</h3>
            </NavLink>
          </ul>
          <ul>
            <NavLink to="/auth?mode=login">
              <h3>LOGIN/JOIN</h3>
            </NavLink>
          </ul>
          <ul>
            <NavLink to="/mypage">
              <h3>MY PAGE</h3>
            </NavLink>
          </ul>
          <ul>
            <Form action="/logout" method="post" className="logout-btn">
              <button>
                <h3>LOGOUT</h3>
              </button>
            </Form>
          </ul>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: left;

  h3{
    font-size: 20px;
  }
  .nav-list {
    display: flex;
    padding: 0;
    margin: 0;
  }
  .nav-list a {
    text-decoration: none;
    display: flex;
    color: black;
    font-family: "Nanum Myeongjo";
  }
  .logout-btn {
    margin: 0;
  }
  button {
    border: white solid ;
    background: none;
    font-family: "Nanum Myeongjo";
    cursor: pointer;
    padding: 0
  }
  }
`;
