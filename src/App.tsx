import { BrowserRouter, Route, Routes } from "react-router";
import { CardSizes } from "@/screens/CardSizes";
import { CardVariants } from "@/screens/CardVariants";
import { Dashboard } from "@/screens/Dashboard";
import { Home } from "@/screens/Home";
import { Login } from "@/screens/Login";
import { Mail } from "@/screens/Mail";
import { SignUp } from "@/screens/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/card-sizes" element={<CardSizes />} />
        <Route path="/card-variants" element={<CardVariants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
