import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setuser(data);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={(user, setuser)}>
      {children}
    </UserContext.Provider>
  );
}
