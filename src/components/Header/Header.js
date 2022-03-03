import { Form } from "react-bootstrap";
import { useState } from "react";

//google forms violet hex codes
// #ea8685
// #e9ecef

function Header() {
  const [formName, setFormName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div
      style={{
        padding: "2rem 1rem",
        marginBottom: "2rem",
        backgroundColor: "#fff",
        borderRadius: ".3rem",
        borderTop: "10px solid rgb(103, 58, 183)",
      }}
      // className="d-flex justify-content-center"
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Control
            style={{
              fontWeight: "600",
            }}
            size="lg"
            type="text"
            placeholder="Form Title"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Form description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Header;
