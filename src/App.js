import { Container } from "react-bootstrap";
import Submit from "./components/Submit/Submit";
import Header from "./components/Header/Header";
import AddElement from "./components/AddElement/AddElement";
import AddQues from "./components/AddQues/AddQues";
import FormElementPreview from "./components/FormElementPreview/FormElementPreview";

function App() {
  return (
    <Container fluid={'lg'}>
      <Header />
      <FormElementPreview
        question={"What do you do?"}
        options={["Engineering", "Nulla", "Job", "Business", "Terrorist"]}
        type="2"
        required
      />
      <AddQues />
      {/* <AddElement
        question={"What is your name?"}
        options={["Shubham", "Ayush", "Abhay"]}
        type={"2"}
        />
      <AddElement /> */}
      <Submit />
    </Container>
  );
}

export default App;
