import { useContext } from "react";
import { AuthContext } from "../content";

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};
