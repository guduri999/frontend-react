
import Header from "./layout/Header";
import Body from "./layout/Body";
import Login from "./layout/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
export default function App() {

  const [logInDetails, setLogInDetails] = useState();
  console.log(logInDetails, "from app")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <>
              <Header passLoginDetails={logInDetails} />
              <Body />
            </>
          }>
          </Route>
          <Route path="/" element={<Login setLogInDetails={setLogInDetails} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
