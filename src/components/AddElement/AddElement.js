import {
  Form,
  Container,
  FormGroup,
  FormControl,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import OptionsViewer from "../OptionsViewer/OptionsViewer";
import './index.css';

// import IconButton from "@mui/material/IconButton";
// import CameraIcon from "@mui/icons-material/Camera";
// import { styled } from "@mui/material/styles";

// const Input = styled("input")({
//   display: "none",
// });

function AddElement(props) {
  // const [details, setDetails] = useState([]);
  const [dropdownselected, setDropdownselected] = useState(
    props.type ? props.type : "1"
  );
  const [question, setQuestion] = useState(
    props.question ? props.question : ""
  );
  const [image, setImage] = useState(props.image ? props.image : "");
  const [optionlabels, setOptionlabels] = useState(
    props.options ? props.options : ["Option-1", "Option-2", "Option-3"]
  );
  // const [multiOptionlabels, setMultiOptionlabels] = useState(
  //   props.options ? props.options : ["Option-1", "Option-2", "Option-3"]
  // );
  const [focused, setFocused] = useState(false);
  const label = { inputProps: { "aria-label": "Required" } };
  const deleterow = (key) => {
    console.log("TODELETE : ", key);
    setOptionlabels((preval) => {
      return preval.filter((item, index) => index !== key);
    });
  };

  const handleChange = () => {};

  // const handleImageupload = (e) => {
  //   const file = e.target.files[0];
  //   console.log("WORKING");
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };
  // };

  return (
    <Card

      style={{
        paddingTop: "2rem",
        marginBottom: "2rem",
        // backgroundColor: "#e9ecef",
        borderRadius: ".3rem",
        borderLeft: focused
          ? "10px solid rgb(103, 58, 183)"
          : "1px solid #e9ecef",
        boxShadow: focused ? "2px 2px 4px #424242" : "none",
        transition: "all .1s ease-in-out",
      }}
      className="md-10"
    >
      <Form
        onSubmit={handleChange}
        onFocus={() => {
          console.log("FOCUSED");
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
          console.log("BLUR");
        }}
      >
        <Container className="d-flex justify-content-around">
          <FormGroup style={{ width: "80%", margin: "0 0.25rem" }}>
            <FormControl
              size="lg"
              className="shadow-none"
              id="ques"
              type="text"
              placeholder="Question"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              value={question}
            />
          </FormGroup>
          {/* <FormGroup onChange={handleImageupload}>
            <Form.Label>
              <CameraIcon />
            </Form.Label>
            <FormControl
              style={{ display: "none" }}
              className="imageSelect"
              type="file"
            ></FormControl>
          </FormGroup> */}
          <FormGroup >
            <Form.Group>
              <Form.Select
                type="text"
                placeholder="Search"
                onChange={(e) => setDropdownselected(e.target.value)}
                defaultValue={dropdownselected}
              >
                <option value="1">Multpile Choice</option>
                <option value="2">Checkbox</option>
                <option value="3">Paragraph</option>
              </Form.Select>
            </Form.Group>
          </FormGroup>
        </Container>
        {image.length ? (
          <div>
            <Image
              src={image}
              fluid
              style={{ height: "20vh", margin: "2% 5%" }}
            ></Image>
            <Button
              variant="outline-danger"
              style={{ padding: "0" }}
              onClick={() => setImage()}
            >
              X
            </Button>
          </div>
        ) : null}
        <OptionsViewer
          type={dropdownselected}
          optionlabels={optionlabels}
          setOptionlabels={setOptionlabels}
          deleterow={deleterow}
          canchange={true}
          />
          {/* <FormGroup>
          {(dropdownselected === "1" || dropdownselected === "2") &&
            optionlabels.map((opt, idx) => {
              return (
                <Options
                  option={opt}
                  canchange
                  changeHandler={setOptionlabels}
                  keyval={idx}
                  type={dropdownselected}
                  deleterow={deleterow}
                />
              );
            })}
          {dropdownselected === "3" && <Paragraph />}
        </FormGroup> */}
        <Container
          variant="bottom"
          className="d-flex flex-row-reverse bd-highlight"
        >
          {dropdownselected === "1" || dropdownselected === "2" ? (
            <Button
              variant="primary"
              style={{ marginRight: "1rem", marginBottom: "1rem" }}
              onClick={(e) => {
                e.preventDefault();
                setOptionlabels((prev) => {
                  return [...prev, "Option-New"];
                });
              }}
            >
              Add Option
            </Button>
          ) : null}
        </Container>
        <Card.Footer>
          <Switch {...label} />
          <span className="ml-2">Required</span>
        </Card.Footer>
      </Form>
    </Card>
  );
}

export default AddElement;

// const form = {
//   question: "Hello, What's ur name buddy?",
//   type: "1",
//   options: [
//     {
//       label: "Option 1",
//       value: "1",
//     },
//     {
//       label: "Option 2",
//       value: "2",
//     },
//     {
//       label: "Option 3",
//       value: "3",
//     },
//   ],
//   paragraph: "",
// };
