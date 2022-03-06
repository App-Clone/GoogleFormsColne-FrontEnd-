import { Container, FormGroup } from "react-bootstrap";
import TextField from "@mui/material/TextField";

function Paragraph({ onChange, keyval, type, deleterow, active, value }) {
  return (
    <Container>
      <FormGroup className="d-flex m-4 p-2">
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Response"
          value={value}
          onChange={onChange}
          disabled={active ? false : true}
          style={{transform: 'translateX(-2%)', width: '80%'}}
        />
      </FormGroup>
    </Container>
  );
}

export default Paragraph;
//audio aao nhi nhi ho raha?...