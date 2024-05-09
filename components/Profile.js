import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Profile = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <>
      <div className="mx-auto w-[40rem] h-[5rem] mt-20">
        <label className="m-5 font-medium">Change user name : </label>
        <input
          className="w-40 h-8 px-2 py-1 text-pretty, rounded shadow-md border border-black bg-slate-100"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
    </>
  );
};
export default Profile;
