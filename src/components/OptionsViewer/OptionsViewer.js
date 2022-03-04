import { FormGroup } from "react-bootstrap";
import Options from "../AddElement/Options";
import Paragraph from "../AddElement/Paragraph";

function OptionsViewer({ type, optionlabels, setOptionlabels, deleterow, canchange}) {
  return (
    <FormGroup>
      {(type === "1" || type === "2") &&
        optionlabels.map((opt, idx) => {
          return (
            <Options
              option={opt}
              canchange={canchange}
              changeHandler={setOptionlabels}
              keyval={idx}
              type={type}
              deleterow={deleterow}
            />
          );
        })}
      {type === "3" && <Paragraph />}
    </FormGroup>
  );
}

export default OptionsViewer;
