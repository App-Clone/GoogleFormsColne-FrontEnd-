import { Container } from "react-bootstrap";
import Submit from "../Submit/Submit";
import Header from "../Header/Header";
import AddQues from "../AddQues/AddQues";
import { useState } from "react";
import Navbar from '../Navbar/Navbar';

function App() {
  const [form, setForm] = useState([]);
  const [header, setHeader] = useState({});

  return (
      <Container fluid={"lg"}>
        <Navbar />
      <Header setHeader={setHeader} canchange/>
      <AddQues setForm={setForm} />
      <Submit form={{questions : form, ...header}} />
    </Container>
  );
}

export default App;
