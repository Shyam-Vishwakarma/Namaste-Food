import { createContext } from "react";
const UserContext = createContext({
  loggedInUser: "Default Name",
});
export default UserContext;
