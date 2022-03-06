import { Card } from "react-bootstrap";
import Options from "../AddElement/Options";
import Paragraph from "../AddElement/Paragraph";
import { useEffect, useState } from "react";
// http://localhost:3000/forms/40df66ca-c515-4176-b6ff-64296e299eb2
function FormElementPreview(props) {
  // const [optAnswer, setOptAnswer] = useState();
  const [paraAnswer, setParaAnswer] = useState("");
  const [valueSelected, setValueSelected] = useState([]);
  const valueSelector = (idx) => {
    if (props.type === "1") {
      setValueSelected(idx);
    } else {
      console.log("CHECKBOX")
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

  useEffect(() => {
    props.setResponse && props.setResponse((prevval) => {
      if (props.type === "1") {
        prevval[props.idx] = valueSelected;
      } else if (props.type === "3") {
        prevval[props.idx] = paraAnswer;
      } else {
        prevval[props.idx] = valueSelected;
      }
      return prevval;
    });
  });
  
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
                checked={props.type !== '1' ? valueSelected.includes(props.idx) : undefined}
                type={props.type}
                valueSelector={valueSelector}
                // islive={valueSelected}
              />
            );
          })
        ) : (
          <Paragraph
            active={true}
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
