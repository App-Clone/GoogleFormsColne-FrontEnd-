import FormElementPreview from "../FormElementPreview/FormElementPreview.js";
import AddElement from "../AddElement/AddElement.js";

function QuestionFormDecider({question, options, type, required, active, quesidx, quesdataaccumulator, setResponse, isPreview}) {
  return (
    <div>
      {active ? (
        <AddElement
          question={question ? question : null}
          options={options ? options : null}
          type={type ? type : null}
          required={required ? required : null}
          idx={quesidx}
          setData={quesdataaccumulator}
          key={quesidx}
        />
      ) : (
        <FormElementPreview
          question={question}
          options={options}
          type={type}
          required={required}
          idx={quesidx}
          setResponse={setResponse}
          isPreview={isPreview}
        />
      )}
    </div>
  );
}

export default QuestionFormDecider;