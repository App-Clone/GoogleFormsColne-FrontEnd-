// 3.	Click on create/generate a form and a LINK needs to get generated
// import cryptoRandomString from 'crypto-random-string';
import { Button, OverlayTrigger, Container, Popover } from "react-bootstrap";
import Api from "../Api/Api";
// import axios from "axios";

// import axios from 'axios';

function Submit({ form }) {
  const create = () => {
    // axios.post(Api("forms"), form).then((res) => {
    //   console.log("VOILA");
    //   navigator.clipboard.writeText(res.data);
    // });
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>Link Copied to clipboard</Popover.Body>
    </Popover>
  );

  return (
    <Container>
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