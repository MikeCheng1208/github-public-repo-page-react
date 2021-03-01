import UserTitle from "./components/UserTitle";
import ReposList from "./components/ReposList";
import styled, { createGlobalStyle } from "styled-components";
import { DataProvider } from "./Context";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    background-color: #e5e5e5;
    padding-bottom: 10px;
  }

  button:focus {
    outline: 0;
  }
`;

const Home = styled.div`
  width: 100%;
`;

function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <Home>
        <UserTitle></UserTitle>
        <ReposList></ReposList>
      </Home>
    </DataProvider>
  );
}

export default App;
