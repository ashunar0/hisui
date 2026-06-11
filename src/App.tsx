import { BrowserRouter, Route, Routes } from "react-router";
import { Booking } from "@/screens/Booking";
import { Calendar } from "@/screens/Calendar";
import { Chat } from "@/screens/Chat";
import { Dashboard } from "@/screens/Dashboard";
import { Dev } from "@/screens/Dev";
import { Home } from "@/screens/Home";
import { Login } from "@/screens/Login";
import { Mail } from "@/screens/Mail";
import { Settings } from "@/screens/Settings";
import { SignUp } from "@/screens/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
