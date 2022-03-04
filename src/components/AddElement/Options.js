import { Form, Container, FormGroup, Button, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";

function Options({
  option,
  changeHandler,
  keyval,
  type,
  deleterow,
  canchange,
}) {
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
          label={canchange ? "" : optionlabel}
          disabled={canchange}
        />
        {canchange && (
          <FormControl
            className="shadow-none"
            id="ques"
            type="text"
            style={{ width: '80.5%'}}
            placeholder="Option-New"
            value={optionlabel}
            name="groupOptions"
            onChange={changehandler}
          />
        )}
        {canchange && (
          <Button
            className="shadow-none"
            style={{ border: "none" }}
            variant="outline-danger"
            onClick={() => canchange && deleterow(keyval)}
          >
            <b>X</b>
          </Button>
        )}
      </FormGroup>
    </Container>
  );
}

export default Options;
