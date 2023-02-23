import {useNavigate} from "react-router-dom";
import {Button} from "../components/UI/Button";
import {login} from "../services/auth";
import {notifyError} from "../utils/error";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <header>
        <h1 className="text-4xl font-bold">Welcome to Your Project</h1>
      </header>
      {/* a login with google button */}
      <div className="flex items-center justify-center gap-x-4 mt-4">
        <p className="text-left">Please login to continue</p>
        <Button
          onClick={() => {
            login()
              .then(() => {
                navigate("/");
              })
              .catch(notifyError);
          }}
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
};
