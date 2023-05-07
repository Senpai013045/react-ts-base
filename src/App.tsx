import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Shop} from "./pages/Shop";
import {Verification} from "./pages/Verification";
import {Success} from "./pages/Success";

function App() {
  return (
    <div className="bg-ui-darkest text-ui-lightest min-h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:slug" element={<Shop />} />
        <Route path="/verification/:index" element={<Verification />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
