import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { Leftsidebar } from "./Components/Leftsidebar";
import { Topbar } from "./Components/Topbar";

import { Banner } from "./Components/Banner";
import { Collabs } from "./Components/Collabs";
import { AccountBilling } from "./Components/AccountBilling";
import { Hrm } from "./Components/Hrm";
import { Hrm2 } from "./Components/Hrm2";
import { Laravel } from "./Components/Laravel";
import { FashionBox } from "./Components/FashionBox";
import { Builttech } from "./Components/Builttech";
import { Dashboards } from "./Pages/Dashboards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/collabs" element={<Collabs />} />
          <Route path="/account-billing" element={<AccountBilling />} />
          <Route path="/hrm" element={<Hrm />} />
          <Route path="/hrm-2" element={<Hrm2 />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/fashion-box" element={<FashionBox />} />
          <Route path="/built-tech" element={<FashionBox />} />
        </Routes>
      </BrowserRouter>
      {/* <Dashboards /> */}
      {/* <Leftsidebar /> */}
      {/* <Topbar /> */}

      {/* <Banner />
      <Collabs />
      <AccountBilling />
      <Hrm />
      <Hrm2 />
      <Laravel />
      <FashionBox />
      <Builttech /> */}
    </>
  );
}

export default App;
