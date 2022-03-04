import { Card } from "react-bootstrap";
import Options from "../AddElement/Options";
import Paragraph from "../AddElement/Paragraph";

function FormElementPreview(props) {
  return (
    <Card
      style={{
        paddingTop: "1rem",
        marginBottom: "2rem",
        transition: "all .1s ease-in-out",
      }}
    >
      <Card.Body>
        <h4 style={{
          paddingLeft: "1.5rem",
        }}>
          {props.question}
          {props.required && (
            <span style={{ color: "red" }}>&nbsp;&nbsp;*</span>
          )}
        </h4>
        {props.type === "1" || props.type === "2" ? (
          props.options.map((opt, idx) => {
            return <Options option={opt} keyval={idx} type={props.type} />;
          })
        ) : (
          <Paragraph />
        )}
      </Card.Body>
    </Card>
  );
}

export default FormElementPreview;
