import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

//google forms violet hex codes
// #ea8685
// #e9ecef

function Header({ setHeader, canchange, formval }) {
  const [formName, setFormName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if(setHeader)
    {setHeader({ title: formName, description: description });}
  }, [formName, description, setHeader]);

  useEffect(() => {
    if (formval) {
      setFormName(formval.title);
      setDescription(formval.description);
    }
  }, [formName, description, formval]);

  return (
    <div
      className="mt-3"
      style={{
        padding: "2rem 1rem",
        marginBottom: "2rem",
        backgroundColor: "#fff",
        borderRadius: ".3rem",
        borderTop: "10px solid rgb(103, 58, 183)",
      }}
      // className="d-flex justify-content-center"
    >
      {canchange ? (
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
      ) : (
        <div className="d-flex flex-column">
          <h2>{formName}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Header;
