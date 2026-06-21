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
import { ComboboxDoc } from "@/screens/docs/components/Combobox";
import { DialogDoc } from "@/screens/docs/components/Dialog";
import { DrawerDoc } from "@/screens/docs/components/Drawer";
import { EditableDoc } from "@/screens/docs/components/Editable";
import { EmptyDoc } from "@/screens/docs/components/Empty";
import { FieldDoc } from "@/screens/docs/components/Field";
import { HeadingDoc } from "@/screens/docs/components/Heading";
import { HoverCardDoc } from "@/screens/docs/components/HoverCard";
import { IconButtonDoc } from "@/screens/docs/components/IconButton";
import { InputDoc } from "@/screens/docs/components/Input";
import { KbdDoc } from "@/screens/docs/components/Kbd";
import { ListboxDoc } from "@/screens/docs/components/Listbox";
import { MenuDoc } from "@/screens/docs/components/Menu";
import { NumberInputDoc } from "@/screens/docs/components/NumberInput";
import { PaginationDoc } from "@/screens/docs/components/Pagination";
import { PasswordInputDoc } from "@/screens/docs/components/PasswordInput";
import { PinInputDoc } from "@/screens/docs/components/PinInput";
import { PopoverDoc } from "@/screens/docs/components/Popover";
import { RadioGroupDoc } from "@/screens/docs/components/RadioGroup";
import { SegmentGroupDoc } from "@/screens/docs/components/SegmentGroup";
import { SelectDoc } from "@/screens/docs/components/Select";
import { SeparatorDoc } from "@/screens/docs/components/Separator";
import { SkeletonDoc } from "@/screens/docs/components/Skeleton";
import { SpinnerDoc } from "@/screens/docs/components/Spinner";
import { SplitterDoc } from "@/screens/docs/components/Splitter";
import { SliderDoc } from "@/screens/docs/components/Slider";
import { StackDoc } from "@/screens/docs/components/Stack";
import { StepsDoc } from "@/screens/docs/components/Steps";
import { SwitchDoc } from "@/screens/docs/components/Switch";
import { TabsDoc } from "@/screens/docs/components/Tabs";
import { TextareaDoc } from "@/screens/docs/components/Textarea";
import { ToastDoc } from "@/screens/docs/components/Toast";
import { ToggleGroupDoc } from "@/screens/docs/components/ToggleGroup";
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
            <Route path="components/combobox" element={<ComboboxDoc />} />
            <Route path="components/dialog" element={<DialogDoc />} />
            <Route path="components/drawer" element={<DrawerDoc />} />
            <Route path="components/editable" element={<EditableDoc />} />
            <Route path="components/empty" element={<EmptyDoc />} />
            <Route path="components/field" element={<FieldDoc />} />
            <Route path="components/heading" element={<HeadingDoc />} />
            <Route path="components/hover-card" element={<HoverCardDoc />} />
            <Route path="components/icon-button" element={<IconButtonDoc />} />
            <Route path="components/input" element={<InputDoc />} />
            <Route path="components/kbd" element={<KbdDoc />} />
            <Route path="components/listbox" element={<ListboxDoc />} />
            <Route path="components/menu" element={<MenuDoc />} />
            <Route
              path="components/number-input"
              element={<NumberInputDoc />}
            />
            <Route path="components/pagination" element={<PaginationDoc />} />
            <Route
              path="components/password-input"
              element={<PasswordInputDoc />}
            />
            <Route path="components/pin-input" element={<PinInputDoc />} />
            <Route path="components/popover" element={<PopoverDoc />} />
            <Route path="components/radio-group" element={<RadioGroupDoc />} />
            <Route
              path="components/segment-group"
              element={<SegmentGroupDoc />}
            />
            <Route path="components/select" element={<SelectDoc />} />
            <Route path="components/separator" element={<SeparatorDoc />} />
            <Route path="components/skeleton" element={<SkeletonDoc />} />
            <Route path="components/slider" element={<SliderDoc />} />
            <Route path="components/spinner" element={<SpinnerDoc />} />
            <Route path="components/splitter" element={<SplitterDoc />} />
            <Route path="components/stack" element={<StackDoc />} />
            <Route path="components/steps" element={<StepsDoc />} />
            <Route path="components/switch" element={<SwitchDoc />} />
            <Route path="components/tabs" element={<TabsDoc />} />
            <Route path="components/textarea" element={<TextareaDoc />} />
            <Route path="components/toast" element={<ToastDoc />} />
            <Route
              path="components/toggle-group"
              element={<ToggleGroupDoc />}
            />
            <Route path="components/tooltip" element={<TooltipDoc />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
