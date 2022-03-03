import { Container } from "react-bootstrap";
import Submit from "./components/Submit/Submit";
import Header from "./components/Header/Header";
import AddElement from "./components/AddElement/AddElement";

function App() {
  return (
    <Container style={{width: '60%'}}>
      <Header />
      <AddElement />
      <Submit />
    </Container>
  );
}

export default App;
