import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MyBackend from "../Api/Api";
import QuestionFormDecider from "../QuestionFormDecider/QuestionFormDecider";
import Header from "../Header/Header";

function FillForm() {
  const { formid } = useParams();
  const navigate = useNavigate();
  const [formdata, setFormData] = useState(null);

  useEffect(() => {
    axios
      .get(MyBackend(`forms/${formid}`))
      .then((res) => {
        console.log(res.data);
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setFormData(null);
        navigate("/error", { replace: true });
      });
  }, [formid, navigate]);

  return (
    <div>
      {formdata ? (
        <div>
          <Header
            formval={{ title: formdata.title, description: formdata.description }}
          />
          <div>
            {formdata.questions.map(
              (
                question,
                idx //yahan error aa rha hai.......smjh ni aa rha hai
              ) => (
                <QuestionFormDecider
                  question={question.question}
                  options={question.options}
                  type={question.type}
                  required={true}
                  quesidx={idx}
                  active={false}
                />
                // TypeError: formdata.map is not a function
                //y aa raha hai
                // the fuck... formdata Object.values(formdata).map(())?
              )
            )}
          </div>
        </div>
      ) : (
        <h1>FORM NOT FOUND</h1>
      )}
    </div>
  );
}

export default FillForm;
