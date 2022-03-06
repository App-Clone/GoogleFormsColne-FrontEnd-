import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MyBackend from "../Api/Api";
import QuestionFormDecider from "../QuestionFormDecider/QuestionFormDecider";
import Header from "../Header/Header";
import { Button, Container } from "react-bootstrap";
import Success from "../Success/Success";

function FillForm() {
  const { formid } = useParams();
  const navigate = useNavigate();
  const [formdata, setFormData] = useState(null);
  const [response, setResponse] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(MyBackend(`forms/${formid}`))
      .then((res) => {
        console.log(res.data);
        setResponse(new Array(res.data.questions.length).fill(null));
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/*", { replace: true });
      });
  }, [formid, navigate]);

  const onSubmit = () => {
    const email = JSON.parse(localStorage.getItem("logindata")).email;
    axios
      .post(MyBackend("responses"), {
        response: response,
        email: email,
        formid: formid,
      })
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        // navigate("/failed");
      });
    console.log(response);
  };

  return (
    <Container fluid={"lg"}>
      {success ? (
        <Success />
      ) : formdata ? (
        <div>
          <Header
            formval={{
              title: formdata.title,
              description: formdata.description,
            }}
          />
          <div>
            {formdata.questions.map((question, idx) => (
              <QuestionFormDecider
                question={question.question}
                options={question.options}
                type={question.type}
                required={true}
                quesidx={idx}
                active={false}
                setResponse={setResponse}
              />
            ))}
            <Button variant="primary" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
}

export default FillForm;
