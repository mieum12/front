import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import MainNav from "../components/MainNav";

export default function RootLayout() {
  return (
    <Root>
      <MainNav>
        <main>
          <Outlet />
        </main>
      </MainNav>
    </Root>
  );
}

const Root = styled.div`
  .main-container {
    text-align: center;
  }
`;
