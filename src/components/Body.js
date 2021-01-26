import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import UserList from "./UserList";
import UserProfile from "./UserProfile";

export const Body = (props) => {
    const [key, setKey] = useState('list');
    const tabOnChange = ()=>{setKey("profile")};
  return (
    <div>
      <Tabs
        defaultActiveKey="list"
        id="uncontrolled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="list" title="Users list">
          <UserList tabOnChange = {tabOnChange}/>
        </Tab>
        <Tab eventKey="profile" title="User Profile">
          {<UserProfile />}
        </Tab>
      </Tabs>
    </div>
  );
};
