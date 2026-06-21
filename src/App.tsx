import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "@/components/ui/toast";
import { Booking } from "@/screens/Booking";
import { Calendar } from "@/screens/Calendar";
import { Chat } from "@/screens/Chat";
import { Dashboard } from "@/screens/Dashboard";
import { Dev } from "@/screens/Dev";
import AccordionDoc from "@/screens/docs/components/Accordion.mdx";
import AlertDoc from "@/screens/docs/components/Alert.mdx";
import AlertDialogDoc from "@/screens/docs/components/AlertDialog.mdx";
import AspectRatioDoc from "@/screens/docs/components/AspectRatio.mdx";
import AvatarDoc from "@/screens/docs/components/Avatar.mdx";
import BadgeDoc from "@/screens/docs/components/Badge.mdx";
import BreadcrumbDoc from "@/screens/docs/components/Breadcrumb.mdx";
import ButtonDoc from "@/screens/docs/components/Button.mdx";
import CardDoc from "@/screens/docs/components/Card.mdx";
import CarouselDoc from "@/screens/docs/components/Carousel.mdx";
import CheckboxDoc from "@/screens/docs/components/Checkbox.mdx";
import ClipboardDoc from "@/screens/docs/components/Clipboard.mdx";
import CollapsibleDoc from "@/screens/docs/components/Collapsible.mdx";
import ColorPickerDoc from "@/screens/docs/components/ColorPicker.mdx";
import ComboboxDoc from "@/screens/docs/components/Combobox.mdx";
import CommandDoc from "@/screens/docs/components/Command.mdx";
import DatePickerDoc from "@/screens/docs/components/DatePicker.mdx";
import DialogDoc from "@/screens/docs/components/Dialog.mdx";
import DrawerDoc from "@/screens/docs/components/Drawer.mdx";
import EditableDoc from "@/screens/docs/components/Editable.mdx";
import EmptyDoc from "@/screens/docs/components/Empty.mdx";
import FieldDoc from "@/screens/docs/components/Field.mdx";
import FileUploadDoc from "@/screens/docs/components/FileUpload.mdx";
import HeadingDoc from "@/screens/docs/components/Heading.mdx";
import HoverCardDoc from "@/screens/docs/components/HoverCard.mdx";
import IconButtonDoc from "@/screens/docs/components/IconButton.mdx";
import InputDoc from "@/screens/docs/components/Input.mdx";
import KbdDoc from "@/screens/docs/components/Kbd.mdx";
import ListboxDoc from "@/screens/docs/components/Listbox.mdx";
import MenuDoc from "@/screens/docs/components/Menu.mdx";
import NumberInputDoc from "@/screens/docs/components/NumberInput.mdx";
import PaginationDoc from "@/screens/docs/components/Pagination.mdx";
import PasswordInputDoc from "@/screens/docs/components/PasswordInput.mdx";
import PinInputDoc from "@/screens/docs/components/PinInput.mdx";
import PopoverDoc from "@/screens/docs/components/Popover.mdx";
import ProgressDoc from "@/screens/docs/components/Progress.mdx";
import QrCodeDoc from "@/screens/docs/components/QrCode.mdx";
import RadioGroupDoc from "@/screens/docs/components/RadioGroup.mdx";
import RatingGroupDoc from "@/screens/docs/components/RatingGroup.mdx";
import ScrollAreaDoc from "@/screens/docs/components/ScrollArea.mdx";
import SegmentGroupDoc from "@/screens/docs/components/SegmentGroup.mdx";
import SelectDoc from "@/screens/docs/components/Select.mdx";
import SeparatorDoc from "@/screens/docs/components/Separator.mdx";
import { SidebarDoc } from "@/screens/docs/components/Sidebar";
import SkeletonDoc from "@/screens/docs/components/Skeleton.mdx";
import SpinnerDoc from "@/screens/docs/components/Spinner.mdx";
import { SplitterDoc } from "@/screens/docs/components/Splitter";
import { SliderDoc } from "@/screens/docs/components/Slider";
import { StackDoc } from "@/screens/docs/components/Stack";
import { StepsDoc } from "@/screens/docs/components/Steps";
import SwitchDoc from "@/screens/docs/components/Switch.mdx";
import { TableDoc } from "@/screens/docs/components/Table";
import { TabsDoc } from "@/screens/docs/components/Tabs";
import TagsInputDoc from "@/screens/docs/components/TagsInput.mdx";
import TextareaDoc from "@/screens/docs/components/Textarea.mdx";
import { ToastDoc } from "@/screens/docs/components/Toast";
import ToggleDoc from "@/screens/docs/components/Toggle.mdx";
import ToggleGroupDoc from "@/screens/docs/components/ToggleGroup.mdx";
import ToolbarDoc from "@/screens/docs/components/Toolbar.mdx";
import { TooltipDoc } from "@/screens/docs/components/Tooltip";
import { TreeViewDoc } from "@/screens/docs/components/TreeView";
import { ChartDoc } from "@/screens/docs/data-viz/Chart";
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
            <Route
              path="components/alert-dialog"
              element={<AlertDialogDoc />}
            />
            <Route
              path="components/aspect-ratio"
              element={<AspectRatioDoc />}
            />
            <Route path="components/avatar" element={<AvatarDoc />} />
            <Route path="components/badge" element={<BadgeDoc />} />
            <Route path="components/breadcrumb" element={<BreadcrumbDoc />} />
            <Route path="components/button" element={<ButtonDoc />} />
            <Route path="components/card" element={<CardDoc />} />
            <Route path="components/carousel" element={<CarouselDoc />} />
            <Route path="components/checkbox" element={<CheckboxDoc />} />
            <Route path="components/clipboard" element={<ClipboardDoc />} />
            <Route
              path="components/collapsible"
              element={<CollapsibleDoc />}
            />
            <Route
              path="components/color-picker"
              element={<ColorPickerDoc />}
            />
            <Route path="components/combobox" element={<ComboboxDoc />} />
            <Route path="components/command" element={<CommandDoc />} />
            <Route
              path="components/date-picker"
              element={<DatePickerDoc />}
            />
            <Route path="components/dialog" element={<DialogDoc />} />
            <Route path="components/drawer" element={<DrawerDoc />} />
            <Route path="components/editable" element={<EditableDoc />} />
            <Route path="components/empty" element={<EmptyDoc />} />
            <Route path="components/field" element={<FieldDoc />} />
            <Route
              path="components/file-upload"
              element={<FileUploadDoc />}
            />
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
            <Route path="components/progress" element={<ProgressDoc />} />
            <Route path="components/qr-code" element={<QrCodeDoc />} />
            <Route path="components/radio-group" element={<RadioGroupDoc />} />
            <Route
              path="components/rating-group"
              element={<RatingGroupDoc />}
            />
            <Route
              path="components/scroll-area"
              element={<ScrollAreaDoc />}
            />
            <Route
              path="components/segment-group"
              element={<SegmentGroupDoc />}
            />
            <Route path="components/select" element={<SelectDoc />} />
            <Route path="components/separator" element={<SeparatorDoc />} />
            <Route path="components/sidebar" element={<SidebarDoc />} />
            <Route path="components/skeleton" element={<SkeletonDoc />} />
            <Route path="components/slider" element={<SliderDoc />} />
            <Route path="components/spinner" element={<SpinnerDoc />} />
            <Route path="components/splitter" element={<SplitterDoc />} />
            <Route path="components/stack" element={<StackDoc />} />
            <Route path="components/steps" element={<StepsDoc />} />
            <Route path="components/switch" element={<SwitchDoc />} />
            <Route path="components/table" element={<TableDoc />} />
            <Route path="components/tabs" element={<TabsDoc />} />
            <Route path="components/tags-input" element={<TagsInputDoc />} />
            <Route path="components/textarea" element={<TextareaDoc />} />
            <Route path="components/toast" element={<ToastDoc />} />
            <Route path="components/toggle" element={<ToggleDoc />} />
            <Route
              path="components/toggle-group"
              element={<ToggleGroupDoc />}
            />
            <Route path="components/toolbar" element={<ToolbarDoc />} />
            <Route path="components/tooltip" element={<TooltipDoc />} />
            <Route path="components/tree-view" element={<TreeViewDoc />} />
            <Route path="data-viz/chart" element={<ChartDoc />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
