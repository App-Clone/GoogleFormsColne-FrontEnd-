import { Container, FormGroup } from "react-bootstrap";
import TextField from "@mui/material/TextField";

function Paragraph({ changeHandler, keyval, type, deleterow }) {
  return (
    <Container>
      <FormGroup className="d-flex m-4 p-2">
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          placeholder="Long answer text"
          disabled
        />
      </FormGroup>
    </Container>
  );
}

export default Paragraph;
