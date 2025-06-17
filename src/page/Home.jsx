import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import SmallSidbar from "../components/SmallSidbar";
import BigSaidbar from "../components/BigSaidbar";
import styled from "styled-components";
import IsLoding from "./isLoding";
function Home() {
  const navget = useNavigation();
  const isLoding = navget.state == "loading";
  return (
    <Wrapper>
      <main className="dashboard bg-white dark:bg-gray-900">
        <SmallSidbar />
        <BigSaidbar />
        <div>
          <Navbar />
          <div className="dashboard-page containere bg-white dark:bg-gray-900">
            {isLoding ? <IsLoding /> : <Outlet />}
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default Home;
const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
