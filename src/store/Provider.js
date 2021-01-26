import React, { useState } from "react";

const schoolContext = React.createContext({});

function Provider(props) {
  const [user, setUser] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState({
    id: null,
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  });

  return (
    <schoolContext.Provider
      value={{ user, setUser, selectedProfile, setSelectedProfile }}
    >
      {props.children}
    </schoolContext.Provider>
  );
}

export { Provider, schoolContext };
