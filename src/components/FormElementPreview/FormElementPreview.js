import { Card } from "react-bootstrap";
import Options from "../AddElement/Options";
import Paragraph from "../AddElement/Paragraph";
import { useState } from "react";

function FormElementPreview(props) {
  // const [optAnswer, setOptAnswer] = useState();
  const [paraAnswer, setParaAnswer] = useState();
  const [valueSelected, setValueSelected] = useState([]);
  const valueSelector = (idx) => {
    if (props.type === "1") {
      setValueSelected(idx);
    } else {
      setValueSelected((prevval) => {
        if (prevval.includes(idx)) {
          prevval.splice(prevval.indexOf(idx), 1);
        } else {
          prevval.push(idx);
        }
        return prevval;
      });
    }
  };
  return (
    <Card
      style={{
        paddingTop: "1rem",
        marginBottom: "2rem",
        transition: "all .1s ease-in-out",
      }}
    >
      <Card.Body>
        <h4
          style={{
            paddingLeft: "1.5rem",
          }}
        >
          {props.question}
          {props.required && (
            <span style={{ color: "red" }}>&nbsp;&nbsp;*</span>
          )}
        </h4>
        {props.type === "1" || props.type === "2" ? (
          props.options.map((opt, idx) => {
            return (
              <Options
                name={"groupOptions" + props.idx}
                option={opt}
                keyval={idx}
                type={props.type}
                valueSelector={valueSelector}
                islive={valueSelected}
              />
            );
          })
        ) : (
          <Paragraph
            active={props.active}
            value={paraAnswer}
            onChange={(e) => {
              setParaAnswer(e.target.value);
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default FormElementPreview;
