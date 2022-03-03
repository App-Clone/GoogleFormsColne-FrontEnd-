import { Form, Container, FormGroup, Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

function Options({ option, changeHandler, keyval, type, deleterow }) {
  const [optionlabel, setOptionLabel] = useState(option);
  useEffect(() => {
    setOptionLabel(option);
  }, [option]);
  console.log("OPTIONLABEL : ", optionlabel);
  const changehandler = (e) => {
    setOptionLabel(e.target.value);
    changeHandler((preval) => {
      preval[keyval] = e.target.value;
      return preval;
    });
  };
  return (
    <Container>
      <FormGroup className="d-flex m-1 p-2">
        <Form.Check
          type={type === "2" ? "checkbox" : "radio"}
          placeholder=""
          label=" "
          disabled
        />
        <TextField
          style={{ width: "80%", marginRight: "0.5rem" }}
          id="standard-basic"
          variant="standard"
          value={optionlabel}
          onChange={changehandler}
        />
        <Button variant="outline-danger" onClick={() => deleterow(keyval)}>
          X
        </Button>
      </FormGroup>
    </Container>
  );
}

export default Options;
