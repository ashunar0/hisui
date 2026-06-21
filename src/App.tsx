import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "@/components/ui/toast";
import { Booking } from "@/screens/Booking";
import { Calendar } from "@/screens/Calendar";
import { Chat } from "@/screens/Chat";
import { Dashboard } from "@/screens/Dashboard";
import { Dev } from "@/screens/Dev";
import { AccordionDoc } from "@/screens/docs/components/Accordion";
import { AlertDoc } from "@/screens/docs/components/Alert";
import { AvatarDoc } from "@/screens/docs/components/Avatar";
import { BadgeDoc } from "@/screens/docs/components/Badge";
import { ButtonDoc } from "@/screens/docs/components/Button";
import { CardDoc } from "@/screens/docs/components/Card";
import { CheckboxDoc } from "@/screens/docs/components/Checkbox";
import { DialogDoc } from "@/screens/docs/components/Dialog";
import { HeadingDoc } from "@/screens/docs/components/Heading";
import { IconButtonDoc } from "@/screens/docs/components/IconButton";
import { InputDoc } from "@/screens/docs/components/Input";
import { MenuDoc } from "@/screens/docs/components/Menu";
import { PopoverDoc } from "@/screens/docs/components/Popover";
import { RadioGroupDoc } from "@/screens/docs/components/RadioGroup";
import { SelectDoc } from "@/screens/docs/components/Select";
import { SkeletonDoc } from "@/screens/docs/components/Skeleton";
import { SliderDoc } from "@/screens/docs/components/Slider";
import { StackDoc } from "@/screens/docs/components/Stack";
import { SwitchDoc } from "@/screens/docs/components/Switch";
import { TabsDoc } from "@/screens/docs/components/Tabs";
import { TextareaDoc } from "@/screens/docs/components/Textarea";
import { TooltipDoc } from "@/screens/docs/components/Tooltip";
import { DocsLayout } from "@/screens/docs/DocsLayout";
import { Colors } from "@/screens/docs/foundations/Colors";
import { Radius } from "@/screens/docs/foundations/Radius";
import { Shadow } from "@/screens/docs/foundations/Shadow";
import { Spacing } from "@/screens/docs/foundations/Spacing";
import { Typography } from "@/screens/docs/foundations/Typography";
import { Overview } from "@/screens/docs/Overview";
import { Home } from "@/screens/Home";
import { Login } from "@/screens/Login";
import { Mail } from "@/screens/Mail";
import { Settings } from "@/screens/Settings";
import { SignUp } from "@/screens/SignUp";

function App() {
  return (
    <>
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
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Overview />} />
            <Route path="foundations/colors" element={<Colors />} />
            <Route path="foundations/typography" element={<Typography />} />
            <Route path="foundations/spacing" element={<Spacing />} />
            <Route path="foundations/shadow" element={<Shadow />} />
            <Route path="foundations/radius" element={<Radius />} />
            <Route path="components/accordion" element={<AccordionDoc />} />
            <Route path="components/alert" element={<AlertDoc />} />
            <Route path="components/avatar" element={<AvatarDoc />} />
            <Route path="components/badge" element={<BadgeDoc />} />
            <Route path="components/button" element={<ButtonDoc />} />
            <Route path="components/card" element={<CardDoc />} />
            <Route path="components/checkbox" element={<CheckboxDoc />} />
            <Route path="components/dialog" element={<DialogDoc />} />
            <Route path="components/heading" element={<HeadingDoc />} />
            <Route path="components/icon-button" element={<IconButtonDoc />} />
            <Route path="components/input" element={<InputDoc />} />
            <Route path="components/menu" element={<MenuDoc />} />
            <Route path="components/popover" element={<PopoverDoc />} />
            <Route path="components/radio-group" element={<RadioGroupDoc />} />
            <Route path="components/select" element={<SelectDoc />} />
            <Route path="components/skeleton" element={<SkeletonDoc />} />
            <Route path="components/slider" element={<SliderDoc />} />
            <Route path="components/stack" element={<StackDoc />} />
            <Route path="components/switch" element={<SwitchDoc />} />
            <Route path="components/tabs" element={<TabsDoc />} />
            <Route path="components/textarea" element={<TextareaDoc />} />
            <Route path="components/tooltip" element={<TooltipDoc />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
