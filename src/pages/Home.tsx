import {useAuth} from "../services/auth";

export const Home = () => {
  const {user} = useAuth();
  return (
    <div className="max-w-[95%] mx-auto mt-4">
      <h1 className="text-4xl font-bold">Welcome to Your Project</h1>
      {/* user name and display picture */}
      <div className="flex items-center gap-x-4 mt-4">
        <p>
          Hello, <span className="font-bold">{user?.displayName}</span>
        </p>
        {user?.photoURL && (
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={user.photoURL} alt="user profile" />
          </div>
        )}
      </div>
    </div>
  );
};
