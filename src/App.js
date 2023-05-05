
import Header from "./layout/Header";
import Body from "./layout/Body";
import Login from "./layout/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <> <Header />
              <Body />
            </>
          }>
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
