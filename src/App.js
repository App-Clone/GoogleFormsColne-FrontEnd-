import Base from "./components/Base/Base";
import FillForm from "./components/FillForm/FillForm";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";
import PageNotFound from "./components/NotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="#" element={<Base />} />
        <Route path="/" element={<Base />} />
        <Route exact path="/forms/:formid" element={<FillForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
