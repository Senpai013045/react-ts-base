import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {ToastContainer} from "react-toastify";
import {WithNav} from "./components/Layout/WithNav";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-ui-lightest text-ui-darkest">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<WithNav />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
