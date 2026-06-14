import { Link } from "react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { AccordionDemo } from "./dev/accordion-demo";
import { AvatarDemo } from "./dev/avatar-demo";
import { CarouselDemo } from "./dev/carousel-demo";
import { CheckboxDemo } from "./dev/checkbox-demo";
import { ClipboardDemo } from "./dev/clipboard-demo";
import { CollapsibleDemo } from "./dev/collapsible-demo";
import { ColorPickerDemo } from "./dev/color-picker-demo";
import { ComboboxDemo } from "./dev/combobox-demo";
import { DatePickerDemo } from "./dev/date-picker-demo";
import { DialogDemo } from "./dev/dialog-demo";
import { DrawerDemo } from "./dev/drawer-demo";
import { EditableDemo } from "./dev/editable-demo";
import { FieldDemo } from "./dev/field-demo";
import { FileUploadDemo } from "./dev/file-upload-demo";
import { HoverCardDemo } from "./dev/hover-card-demo";
import { MenuDemo } from "./dev/menu-demo";
import { NumberInputDemo } from "./dev/number-input-demo";
import { PaginationDemo } from "./dev/pagination-demo";
import { PasswordInputDemo } from "./dev/password-input-demo";
import { PinInputDemo } from "./dev/pin-input-demo";
import { PopoverDemo } from "./dev/popover-demo";
import { ProgressDemo } from "./dev/progress-demo";
import { QrCodeDemo } from "./dev/qr-code-demo";
import { RadioGroupDemo } from "./dev/radio-group-demo";
import { RatingGroupDemo } from "./dev/rating-group-demo";
import { ScrollAreaDemo } from "./dev/scroll-area-demo";
import { Section } from "./dev/section";
import { SegmentGroupDemo } from "./dev/segment-group-demo";
import { SelectDemo } from "./dev/select-demo";
import { SliderDemo } from "./dev/slider-demo";
import { SplitterDemo } from "./dev/splitter-demo";
import { StepsDemo } from "./dev/steps-demo";
import { SwitchDemo } from "./dev/switch-demo";
import { TabsDemo } from "./dev/tabs-demo";
import { TagsInputDemo } from "./dev/tags-input-demo";
import { ToastDemo } from "./dev/toast-demo";
import { ToggleGroupDemo } from "./dev/toggle-group-demo";
import { TooltipDemo } from "./dev/tooltip-demo";
import { TreeViewDemo } from "./dev/tree-view-demo";

export function Dev() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-12 px-6 py-12">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Dev sandbox</h1>
          <p className="text-sm text-fg-muted">Primitives playground</p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/" className="text-sm text-fg-muted hover:text-fg">
            ← home
          </Link>
        </div>
      </header>

      <Section
        title="Accordion"
        description="border-bottom 区切りの折りたたみ。Context / ItemContext / RootProvider も dot-namespace に export。single (chevron) / multiple (左 icon + 設定 group) / plus-minus (ItemContext render-prop で open に応じて Plus を 45° 回転) の 3 パターン。"
      >
        <AccordionDemo />
      </Section>

      <Section
        title="Avatar"
        description="Image + Fallback の組み合わせ。sizes (xs〜2xl) / shapes (circle / rounded / square) + fallback (initials / icon child / broken src) / avatar group (-space-x-2 + ring で重ね合わせ、+N more)。"
      >
        <AvatarDemo />
      </Section>

      <Section
        title="Carousel"
        description="Hero slider / image gallery。Prev/Next を overlay、Indicator は current で長方形に伸びる。loop + autoplay で auto cycle。"
      >
        <CarouselDemo />
      </Section>

      <Section
        title="Checkbox"
        description="Checked / indeterminate / disabled。Tooltip と同じ bg-fg + text-bg の世界観。"
      >
        <CheckboxDemo />
      </Section>

      <Section
        title="Clipboard"
        description="Copy ボタン。copied prop で copied 時 icon 差替 (Copy → Check)、timeout で表示時間調整。"
      >
        <ClipboardDemo />
      </Section>

      <Section
        title="Collapsible"
        description="Show more / advanced options。height アニメは accordion と同じ keyframes (--animate-accordion-down/up) 流用。"
      >
        <CollapsibleDemo />
      </Section>

      <Section
        title="Color Picker"
        description="Hex input + Trigger で popover、Area で saturation/value、Hue slider、preset swatches。Brand color 設定で使う。"
      >
        <ColorPickerDemo />
      </Section>

      <Section
        title="Combobox"
        description="入力で絞り込める select。Positioner / List / ItemGroup / ItemGroupLabel / Context / ItemContext / RootProvider も dot-namespace に export。basic single (Empty fallback) / grouped (国別 ItemGroup + ClearTrigger) / multiple (Context render-prop で選択数表示) の 3 パターン。"
      >
        <ComboboxDemo />
      </Section>

      <Section
        title="Date Picker"
        description="ja-JP locale で日付選択。single / range (numOfMonths=2、Input 2 つ + ClearTrigger) / multiple (Context render-prop で選択数表示)。Calendar compound は Day → Month → Year view 全部入り。"
      >
        <DatePickerDemo />
      </Section>

      <Section
        title="Dialog"
        description="Modal overlay。basic confirmation / destructive (Context render-prop で title に対象名 embed) / form (Field + Input + Textarea) の 3 パターン。Backdrop と Positioner も dot-namespace に export 済み。"
      >
        <DialogDemo />
      </Section>

      <Section
        title="Drawer"
        description="Slide-over panel。swipeDirection で right / left / up / down、data-swipe-direction で位置と animation を切替。"
      >
        <DrawerDemo />
      </Section>

      <Section
        title="Editable"
        description="inline rename。Preview と Input が状態で切替、Edit/Submit/Cancel trigger を Control に並べる。"
      >
        <EditableDemo />
      </Section>

      <Section
        title="Field"
        description="Form field wrapper。required (RequiredIndicator + HelperText) / invalid (ErrorText + aria-invalid で border 赤) / Textarea + Select (disabled state)。Ark UI が a11y attribute (aria-describedby / aria-invalid / aria-required) を自動配線。"
      >
        <FieldDemo />
      </Section>

      <Section
        title="File Upload"
        description="Dropzone (画像複数 + ItemPreview + ItemSizeText + ItemDeleteTrigger + ClearTrigger) / Document (PDF 1 つ、Button trigger + 選択 file 名表示) / Avatar (画像 1 枚 + Avatar.Image preview)。"
      >
        <FileUploadDemo />
      </Section>

      <Section
        title="Hover Card"
        description="Hover で出る非モーダル overlay。Positioner / Arrow / ArrowTip / Context / RootProvider も dot-namespace に export。@mention user profile / link preview (p-0 flush) / inline help (Arrow + ArrowTip で trigger を指す、placement=top) の 3 パターン。"
      >
        <HoverCardDemo />
      </Section>

      <Section
        title="Menu"
        description="Dropdown menu。Item + shortcut + disabled + destructive / Submenu (TriggerItem) / ItemGroup + Label + RadioItemGroup + CheckboxItem の 3 パターン。"
      >
        <MenuDemo />
      </Section>

      <Section
        title="Number Input"
        description="入力 + 縦並び stepper。min/max/step 対応、disabled もサポート。"
      >
        <NumberInputDemo />
      </Section>

      <Section
        title="Pagination"
        description="Prev/Next + 番号 + ellipsis。current は bg-fg + text-bg、disabled は opacity-50。"
      >
        <PaginationDemo />
      </Section>

      <Section
        title="Password Input"
        description="VisibilityTrigger で表示 / 非表示切替、Indicator (Eye / EyeOff) を data-state で fallback と差替。Basic / With Label + HelperText / Variants (outline / subtle / flushed) の 3 パターン。"
      >
        <PasswordInputDemo />
      </Section>

      <Section
        title="Pin Input"
        description="OTP / 2FA 用。各桁 box、focus 自動移動、paste 対応。otp / numeric variant。"
      >
        <PinInputDemo />
      </Section>

      <Section
        title="Popover"
        description="Click 型 overlay。Anchor / Positioner / Arrow / ArrowTip / Title / Description / Indicator も dot-namespace に export。quick add (Title+Description+Arrow) / filter (Trigger Indicator で chevron 回転) / share link の 3 パターン。"
      >
        <PopoverDemo />
      </Section>

      <Section
        title="Progress"
        description="Linear と Circular。indeterminate も対応 (value={null})。"
      >
        <ProgressDemo />
      </Section>

      <Section
        title="QR Code"
        description="Share URL / 2FA setup 用。basic と overlay (中央ロゴ) + download trigger。encoding.ecc で誤り訂正レベル選択。"
      >
        <QrCodeDemo />
      </Section>

      <Section
        title="Radio Group"
        description="checked 時 ring が黒くなって中に小さな dot。Checkbox と統一感。"
      >
        <RadioGroupDemo />
      </Section>

      <Section
        title="Rating Group"
        description="星 5 段階。allowHalf で 0.5 刻み、ItemContext で highlighted / half を受け取り fill 切替。"
      >
        <RatingGroupDemo />
      </Section>

      <Section
        title="Scroll Area"
        description="OS の scrollbar を hide してテーマ追従の細バー。vertical (long text) / horizontal (chip rail) / both axes (table + Corner)。"
      >
        <ScrollAreaDemo />
      </Section>

      <Section
        title="Segment Group"
        description="iOS 風 sliding indicator 付き segmented control。ToggleGroup single の代替、Tabs と同じ CSS var で indicator 移動。"
      >
        <SegmentGroupDemo />
      </Section>

      <Section
        title="Select"
        description="Dropdown select。Basic (single + Label + Indicator + ItemIndicator) / Grouped (ItemGroup + ItemGroupLabel で region 別) / Clearable + form (ClearTrigger + HiddenSelect で form submit 対応)。"
      >
        <SelectDemo />
      </Section>

      <Section
        title="Slider"
        description="単一値 / range (2 thumb) / disabled。Track は Progress と統一感、Thumb は outline ring 型。"
      >
        <SliderDemo />
      </Section>

      <Section
        title="Splitter"
        description="Resizable panes。horizontal / vertical、min/max 制約付き。trigger を hover/drag で highlight。"
      >
        <SplitterDemo />
      </Section>

      <Section
        title="Steps"
        description="multi-step wizard。current は border-fg、complete は bg-fg + check。"
      >
        <StepsDemo />
      </Section>

      <Section
        title="Switch"
        description="ON/OFF toggle。Basic (default / checked / disabled / disabled+checked) と Settings list (divide-y で title + description + 右 Switch の row pattern)。"
      >
        <SwitchDemo />
      </Section>

      <Section
        title="Tabs"
        description="Indicator が --top/--left/--width/--height CSS var で sliding。pill (Calendar 風) / with icon + count Badge (Inbox 12) / vertical (Settings 左 nav 風) の 3 パターン。"
      >
        <TabsDemo />
      </Section>

      <Section
        title="Tags Input"
        description="Enter で tag 追加、× で削除。Context render-prop で items を iterate。"
      >
        <TagsInputDemo />
      </Section>

      <Section
        title="Toast"
        description="Bottom-right notifications. Icon色で type を表現。"
      >
        <ToastDemo />
      </Section>

      <Section
        title="Toggle Group"
        description="segmented button group。single (排他) と multiple (複数選択)。pressed は bg-fg + text-bg。"
      >
        <ToggleGroupDemo />
      </Section>

      <Section
        title="Tooltip"
        description="Hover で出るヒント。Positioner / Arrow / ArrowTip / Context / RootProvider も dot-namespace に export。simple hint / toolbar (icon-only button に label + shortcut) / with Arrow (help icon + positioning prop で右配置) の 3 パターン。"
      >
        <TooltipDemo />
      </Section>

      <Section
        title="Tree View"
        description="フォルダ風 nav。createTreeCollection + 再帰 renderNode、BranchIndicator は data-[state=open]:rotate-90 で chevron 回転。"
      >
        <TreeViewDemo />
      </Section>
    </div>
  );
}
