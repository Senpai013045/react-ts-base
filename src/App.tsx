import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col min-w-[100vw] min-h-[100vh] bg-ui-darkest text-ui-lightest">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
