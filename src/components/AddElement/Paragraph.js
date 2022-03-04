import { Container, FormGroup } from "react-bootstrap";
import TextField from "@mui/material/TextField";

function Paragraph({ changeHandler, keyval, type, deleterow }) {
  return (
    <Container>
      <FormGroup className="d-flex m-4 p-2">
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Response"
          disabled
          style={{transform: 'translateX(-2%)', width: '80%'}}
        />
      </FormGroup>
    </Container>
  );
}

export default Paragraph;
