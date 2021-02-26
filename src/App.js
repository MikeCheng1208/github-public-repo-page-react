import "./css/App.css";
import UserTitle from "./components/UserTitle";
import styled from "styled-components";

const Home = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <Home>
      <UserTitle></UserTitle>
    </Home>
  );
}

export default App;
