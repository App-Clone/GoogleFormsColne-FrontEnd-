import { useState } from "react";
import Base from "./components/Base/Base";
import Oauth from "./components/Oauth/Oauth";
import FillForm from "./components/FillForm/FillForm";
import PageNotFound from "./components/NotFound/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [logindata, setLogindata] = useState(
    localStorage.getItem("logindata")
      ? JSON.parse(localStorage.getItem("logindata"))
      : null
  );

  return (
    <Router>
      {logindata ? (
        <Routes>
          <Route path="#" element={<Base />} />
          <Route path="/" element={<Base />} />
          <Route exact path="/forms/:formid" element={<FillForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Oauth setLoginInfo={setLogindata} />
      )}
    </Router>
  );
}

export default App;