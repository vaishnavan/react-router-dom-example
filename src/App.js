import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import UserDataDisplay from "./components/UsersDataDisplay";
import UsersDetail from "./components/UsersDetail";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserData(res.data);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/blog",
      element: <UserDataDisplay myData={userData} />
    },
    {
      path: "/blog/:id",
      element: <UsersDetail userData={userData} />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
