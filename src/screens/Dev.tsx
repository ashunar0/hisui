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
        description="RootProvider / AutoplayTrigger / AutoplayIndicator / ProgressText も dot-namespace に export。hero slider (4 枚、Prev/Next + Indicator) / image gallery + ProgressText counter (2 / 4 表示) / autoplay + AutoplayTrigger (AutoplayIndicator で Play/Pause icon 切替、loop=true で auto cycle) の 3 パターン。Indicator は data-current で長方形に伸びる。"
      >
        <CarouselDemo />
      </Section>

      <Section
        title="Checkbox"
        description="Group / GroupProvider / Indicator / HiddenInput / Context / RootProvider も dot-namespace に export。states (default / checked / indeterminate / disabled) / Group (newsletter category) / select all (parent が indeterminate ↔ all、TODO list で checked 時 strikethrough) の 3 パターン。"
      >
        <CheckboxDemo />
      </Section>

      <Section
        title="Clipboard"
        description="RootProvider も dot-namespace に export。Indicator は default で Copy → Check の icon 差替を内蔵。install command (Label + Input + Trigger) / inline URL pill (Trigger を size-6 border-0 で minimal 化) / code block + ValueText (Label + ValueText で full text 表示 + 下に Copy text button) の 3 パターン。"
      >
        <ClipboardDemo />
      </Section>

      <Section
        title="Collapsible"
        description="Context / RootProvider も dot-namespace に export。show more (Context render-prop で Trigger ラベルを Show more ↔ Show less に swap) / advanced options (filter panel 風 chevron + bordered content) / disabled (data-disabled で opacity-50) の 3 パターン。height アニメは --animate-accordion-down/up 流用。"
      >
        <CollapsibleDemo />
      </Section>

      <Section
        title="Color Picker"
        description="RootProvider も dot-namespace に export。full popover (Area + Hue/Alpha + SwatchGroup + FormatTrigger で hsla/rgba/hsba 切替、 controlled value + onFormatChange で toFormat 同期) / swatches only (Trigger → popover で SwatchGroup grid のみ、 brand color picker 用) / inline (popover 無し、 Area + Slider を Root 直下で settings panel 風に展開) の 3 パターン。"
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
        description="Slide-over panel。Backdrop / Positioner / RootProvider も dot-namespace に export。right (default、 Settings + body + footer) / left (mobile nav) / bottom sheet (Grabber + GrabberIndicator で iOS 風、スワイプダウンで閉じる) の 3 パターン。swipeDirection で位置と animation を切替。"
      >
        <DrawerDemo />
      </Section>

      <Section
        title="Editable"
        description="RootProvider も dot-namespace に export。focus mode (click → edit、 blur で auto save) / with Edit / Submit / Cancel trigger (Ark が editing 状態で自動 swap) / dblclick + Context (Context render-prop で editing を判別、 heading style + 右に edit pencil button + helper text を editing 状態で出し分け) の 3 パターン。"
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
        description="Dropdown menu。Positioner / ContextTrigger / ItemContext / RootProvider も dot-namespace に export、ArrowTip の border 削除 (Vercel/Linear 風 fill のみ)。edit menu (Item + shortcut + disabled + destructive) / share submenu (TriggerItem で nested Menu.Root) / view options (RadioItemGroup + CheckboxItem + ItemGroupLabel + closeOnSelect=false) の 3 パターン。"
      >
        <MenuDemo />
      </Section>

      <Section
        title="Number Input"
        description="IncrementTrigger / DecrementTrigger / Scrubber / ValueText / Context / RootProvider も dot-namespace に export。quantity (default vertical stepper、 min/max/step/disabled) / cart style (− Input + 横並び) / scrubbable (Label に Scrubber 被せて drag で値変更、 ValueText で current 表示) の 3 パターン。"
      >
        <NumberInputDemo />
      </Section>

      <Section
        title="Pagination"
        description="RootProvider / FirstTrigger / LastTrigger も dot-namespace に export。default (count=100、 Prev + numbers + ellipsis + Next) / with First / Last trigger (ChevronsLeft / ChevronsRight 内蔵、count=500 large dataset) / compact (Context render-prop で api.page / totalPages / count を text 表示、 table footer 風に Prev/Next icon button のみ) の 3 パターン。current は bg-fg + text-bg。"
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
        description="Context / RootProvider も dot-namespace に export。OTP 6 digits (otp prop で autocomplete) / masked PIN 4 digits (mask で •) / with submit (Context render-prop で全桁埋まるまで Verify を disable + counter 表示) の 3 パターン。"
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
        description="View / Context / RootProvider も dot-namespace に export。linear (file upload + indeterminate) / big circle + center label (Apple Watch 風) / state View (loading ↔ complete で content swap、 100% で ✓ Done) の 3 パターン。"
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
        description="Indicator / ItemHiddenInput / Context / ItemContext / RootProvider も dot-namespace に export。basic vertical (default dot + disabled) / plan cards (Item を card 化、 data-[state=checked]:border-fg + bg-active で選択 highlight) / segmented horizontal (Indicator で sliding 選択、Tabs と同じ CSS var) の 3 パターン。"
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
        description="iOS 風 sliding indicator 付き segmented control。Label / Context / ItemContext / RootProvider も dot-namespace に export、Item で ItemHiddenInput auto mount。period selector (horizontal) / view type with icons (Grid/List/Calendar) / vertical + Label (orientation=vertical で縦並び、Enterprise disabled) の 3 パターン。"
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
        description="MarkerGroup / Marker / DraggingIndicator / HiddenInput / Context / RootProvider も dot-namespace に export、Thumb で HiddenInput auto mount。volume (single + disabled) / price range + markers (2 thumb + $0/$25/.../$100 tick) / with DraggingIndicator (drag 中に値 bubble) の 3 パターン。"
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
        description="Progress / Context / ItemContext / RootProvider も dot-namespace に export。Root / List / Item / Separator に orientation=vertical 対応。horizontal wizard (Account / Profile / Confirm + CompletedContent) / compact + counter (number only + Context で step N / total) / vertical sidebar (onboarding 左 nav 風) の 3 パターン。"
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
        description="Bottom-right notifications。Toast (Root / Title / Description / ActionTrigger / CloseTrigger / Context) も dot-namespace に export、 Toaster 内部もそれを使うように refactor。types (6 種) / with action (ActionTrigger で Undo) / promise (loading → success/error を 1 toast で遷移) の 3 パターン。"
      >
        <ToastDemo />
      </Section>

      <Section
        title="Toggle Group"
        description="segmented button group。Context / RootProvider も dot-namespace に export。view switcher (single 排他、 icon + text) / text align (single icons + aria-label) / text style (multiple、 Bold+Italic 同時 on) の 3 パターン。pressed は bg-fg + text-bg。"
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
