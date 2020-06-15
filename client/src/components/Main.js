import React, { useState, useEffect } from "react";
import axios from "axios";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import StatusToggle from "./StatusToggle";
import GroupSelector from "./GroupSelector";
import { URL_GETUSERDATA } from "../config/urls";
import { SelectedGroupProvider } from "./SelectedGroupContext";
import MainHeader from "./MainHeader";

export default function Main(props) {
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(URL_GETUSERDATA).then((response) => {
      setUserData(response.data);
    });
  }, [count]);

  return (
    <SelectedGroupProvider>
      <MainHeader />
      <div className="container-">
        {console.log(userData ? userData.todos : [])}
        {console.log(count)}
        <div className="left-lane">
          <GroupSelector
            groups={userData ? userData.groups : []}
            setCount={setCount}
          />
        </div>
        <div className="middle-lane">
          <InputBar setCount={setCount} />
          <StatusToggle />
          <TodoList list={userData ? userData.todos : []} setCount={setCount} />
        </div>
      </div>
    </SelectedGroupProvider>
  );
}
