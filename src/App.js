import React from "react";
import LoginForm from "./Components/Login/LoginForm";
import RegistrationForm from "./Components/Login/RegistrartionForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AdminPage from "./Pages/Admin/AdminPage";
import Users from "./Pages/Admin/Users";
import AllProduct from "./Pages/Admin/AllProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/Dashbord" element={<Home />} />
          <Route element={<AdminPage />}>
            <Route path="admin/user" element={<Users />} />
            <Route path="admin/product" element={<AllProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Counter /> */}
    </div>
  );
};

export default App;
