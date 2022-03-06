import GoogleLogin from "react-google-login";
import { Container } from "react-bootstrap";
import axios from "axios";
import MyBackend from '../Api/Api';

function Oauth({ setLoginInfo }) {
  const handleLogout = () => {
    localStorage.removeItem("logindata");
    setLoginInfo(null);
  };

  const handleLogin = (response) => {
    axios
      .post(MyBackend("google-login/"), {token : response.tokenId})
      .then((res) => {
        localStorage.setItem("logindata", JSON.stringify(res.data));
        console.log(res.data);
        setLoginInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container fluid className="d-flex justify-content-center" style={{transform: 'translateY(50%)'}}>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleLogin}
        onFailure={handleLogout}
        cookiePolicy="single_host_origin"
      />
    </Container>
  );
}

export default Oauth;
