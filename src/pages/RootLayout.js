import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import MainNav from "../components/MainNav";
import { NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <Root>
      <header className="title">
        <NavLink to="/">
          <h1>9UCCI</h1>
        </NavLink>
      </header>
      <MainNav />
      <main className="main-container">
        <Outlet />
      </main>
    </Root>
  );
}

const Root = styled.div`
  header {
    display: flex;
    justify-content: center;
  }
  h1 {
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 300px;
    font-family: "Nanum Myeongjo";
    font-size: 50px;
  }
  .main-container {
    text-align: center;
  }
  .title a {
    color: black;
    text-decoration: none;
  }
`;
