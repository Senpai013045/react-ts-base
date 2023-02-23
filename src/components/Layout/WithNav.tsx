import {Outlet, useNavigate} from "react-router-dom";
import {logout, useAuth} from "../../services/auth";
import {notifyError} from "../../utils/error";
import {Button} from "../UI/Button";

export const WithNav = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap px-4 py-2 shadow-sm bg-ui-lighter">
        <h1 className="text-xl font-bold cursor-pointer">Project</h1>
        <div className="flex items-center justify-center gap-x-4">
          <p>{user?.email}</p>
          <Button
            onClick={() => {
              logout()
                .then(() => {
                  navigate("/login");
                })
                .catch(notifyError);
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
