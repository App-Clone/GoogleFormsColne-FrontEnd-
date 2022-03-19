// 3.	Click on create/generate a form and a LINK needs to get generated
// import cryptoRandomString from 'crypto-random-string';

import { Button, OverlayTrigger, Container, Popover } from "react-bootstrap";
import Api from "../Api/Api";
import axios from "axios";

function Submit({ form }) {
  const create = () => {
    console.log(form)
    axios.post(Api("forms"), form).then((res) => {
      console.log("VOILA", res);
      navigator.clipboard.writeText(window.location.href + "forms/" + res.data.id);
      setTimeout(window.location.reload(), 200);
    }).catch(err => {
      console.log(err);
    });
  };
  
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>Link Copied to clipboard</Popover.Body>
    </Popover>
  );

  return (
    <Container className="d-flex justify-content-center mb-3">
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={popover}
        rootClose={true}
      >
        <Button
          className="shadow-none"
          onClick={create}
          style={{ backgroundColor: "rgb(103, 58, 183)" }}
        >
          Create Form and Copy Link
        </Button>
      </OverlayTrigger>
    </Container>
  );
}

export default Submit;