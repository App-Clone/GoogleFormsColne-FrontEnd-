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
import Options from "./Options";
import Paragraph from "./Paragraph";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const Input = styled("input")({
  display: "none",
});

function AddElement(props) {
  // const [details, setDetails] = useState([]);
  const [dropdownselected, setDropdownselected] = useState("1");
  const [image, setImage] = useState("");
  const [optionlabels, setOptionlabels] = useState([
    "Option-1",
    "Option-2",
    "Option-3",
  ]);
  const [focused, setFocused] = useState(false);
  const label = { inputProps: { "aria-label": "Required" } };

  const deleterow = (key) => {
    console.log("TODELETE : ", key);
    setOptionlabels((preval) => {
      return preval.filter((item, index) => index !== key);
    });
  };

  const handleChange = () => {};
  const handleImageupload = (e) => {
    const file = e.target.files[0];
    console.log("WORKING");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
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
        <Container className="d-flex">
          <FormGroup style={{ width: "80%" }}>
            <FormControl
            size='lg'
              style={{ border: "none"}}
              type="text"
              placeholder="Question"
            />
          </FormGroup>
          {/* <FormGroup onChange={handleImageupload}>
            <FormControl type="file" />
          </FormGroup> */}
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={handleImageupload}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <FormGroup>
            <Form.Group>
              <Form.Select
                type="text"
                placeholder="Search"
                onChange={(e) => setDropdownselected(e.target.value)}
              >
                <option value="1">Multpile Choice</option>
                <option value="2">Checkbox</option>
                <option value="3">Paragraph</option>
              </Form.Select>
            </Form.Group>
          </FormGroup>
        </Container>
        {image.length ? (
          <Image src={image} fluid style={{ height: "20vh", margin: "2% 5%" }}></Image>
        ) : null}
        <FormGroup>
          {(dropdownselected === "1" || dropdownselected === "2") &&
            optionlabels.map((opt, idx) => {
              return (
                <Options
                  option={opt}
                  changeHandler={setOptionlabels}
                  keyval={idx}
                  type={dropdownselected}
                  deleterow={deleterow}
                />
              );
            })}
          {dropdownselected === "3" && <Paragraph />}
        </FormGroup>
        <Container
          variant="bottom"
          className="d-flex flex-row-reverse bd-highlight mb-3"
        >
          {dropdownselected === "1" || dropdownselected === "2" ? (
            <Button
              variant="primary"
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
