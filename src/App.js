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

import { Layout } from "./Pages/Layout";
import { MobileDrawer } from "./Assets/MobileDrawer";
import { Colablist } from "./Assets/Colablist";
import { Accountss } from "./Assets/Accountss";

function App() {
  return (
    <>
      {/* <MobileDrawer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/collabs" element={<Collabs />} />
          <Route path="/account-billing" element={<AccountBilling />} />
          <Route path="/hrm" element={<Hrm />} />
          <Route path="/hrm-2" element={<Hrm2 />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/fashion-box" element={<FashionBox />} />
          <Route path="/built-tech" element={<Builttech />} />
        </Routes>
      </BrowserRouter>
      {/* <Colablist /> */}
      {/* <Accountss /> */}
    </>
  );
}

export default App;
