import "./css/App.css";
import UserTitle from "./components/UserTitle";
import ReposList from "./components/ReposList";
import styled from "styled-components";
import { DataProvider } from "./Context";

const Home = styled.div`
  width: 100%;
`;

function App() {
  return (
    <DataProvider>
      <Home>
        <UserTitle></UserTitle>
        <ReposList></ReposList>
      </Home>
    </DataProvider>
  );
}

export default App;
