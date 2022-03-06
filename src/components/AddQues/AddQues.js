import QuestionFormDecider from "../QuestionFormDecider/QuestionFormDecider";
import { Button } from "react-bootstrap";
import { useState } from "react";

//to db quesdata

function AddQues({ setForm }) {
  const [active, setActive] = useState([]);
  const [quesdata, setQuesdata] = useState([]);
  const utilfn = async () => {
    setActive((p) => {
      var arr = new Array(p.length).fill(false);
      arr.push(true);
      return arr;
    });
    setQuesdata((prevval) => {
      return prevval.concat({});
    });
  };
  const onButtonClick = () => {
    utilfn().then(() => {
      setForm(quesdata);
    });
    console.log("active", active);
  };

  const quesdataaccumulator = (data, idx) => {
    setQuesdata((prevval) => {
      prevval[idx] = data;
      return prevval;
    });
  };
  return (
    <div>
      {quesdata.map((ques, index) => {
        console.log("DATAAAA : ", quesdata, active);
        return (
          <QuestionFormDecider
            question={ques.question}
            options={ques.options}
            type={ques.type}
            required={ques.required}
            active={active[index]}
            quesidx={index}
            key={index}
            quesdataaccumulator={quesdataaccumulator}
          />
        );
      })}
      <div className="d-flex flex-row-reverse mb-3">
        <Button onClick={onButtonClick}>Add New</Button>
      </div>
    </div>
  );
}

export default AddQues;
