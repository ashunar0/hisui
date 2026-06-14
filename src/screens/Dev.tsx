import { Link } from "react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { AccordionDemo } from "./dev/accordion-demo";
import { CheckboxDemo } from "./dev/checkbox-demo";
import { CollapsibleDemo } from "./dev/collapsible-demo";
import { ComboboxDemo } from "./dev/combobox-demo";
import { DialogDemo } from "./dev/dialog-demo";
import { NumberInputDemo } from "./dev/number-input-demo";
import { PaginationDemo } from "./dev/pagination-demo";
import { PinInputDemo } from "./dev/pin-input-demo";
import { ProgressDemo } from "./dev/progress-demo";
import { RadioGroupDemo } from "./dev/radio-group-demo";
import { RatingGroupDemo } from "./dev/rating-group-demo";
import { Section } from "./dev/section";
import { SliderDemo } from "./dev/slider-demo";
import { StepsDemo } from "./dev/steps-demo";
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
        title="Dialog"
        description="Modal overlay with backdrop, title, description."
      >
        <DialogDemo />
      </Section>

      <Section
        title="Toast"
        description="Bottom-right notifications. Icon色で type を表現。"
      >
        <ToastDemo />
      </Section>

      <Section
        title="Tooltip"
        description="Hover で出る短いヒント。bg-fg + text-bg の反転コントラスト。"
      >
        <TooltipDemo />
      </Section>

      <Section
        title="Checkbox"
        description="Checked / indeterminate / disabled。Tooltip と同じ bg-fg + text-bg の世界観。"
      >
        <CheckboxDemo />
      </Section>

      <Section
        title="Radio Group"
        description="checked 時 ring が黒くなって中に小さな dot。Checkbox と統一感。"
      >
        <RadioGroupDemo />
      </Section>

      <Section
        title="Combobox"
        description="入力で絞り込める select。useListCollection で filter logic を委譲。"
      >
        <ComboboxDemo />
      </Section>

      <Section
        title="Accordion"
        description="border-bottom 区切りの折りたたみ。multiple で複数同時展開も可能。"
      >
        <AccordionDemo />
      </Section>

      <Section
        title="Progress"
        description="Linear と Circular。indeterminate も対応 (value={null})。"
      >
        <ProgressDemo />
      </Section>

      <Section
        title="Number Input"
        description="入力 + 縦並び stepper。min/max/step 対応、disabled もサポート。"
      >
        <NumberInputDemo />
      </Section>

      <Section
        title="Slider"
        description="単一値 / range (2 thumb) / disabled。Track は Progress と統一感、Thumb は outline ring 型。"
      >
        <SliderDemo />
      </Section>

      <Section
        title="Steps"
        description="multi-step wizard。current は border-fg、complete は bg-fg + check。"
      >
        <StepsDemo />
      </Section>

      <Section
        title="Tags Input"
        description="Enter で tag 追加、× で削除。Context render-prop で items を iterate。"
      >
        <TagsInputDemo />
      </Section>

      <Section
        title="Pin Input"
        description="OTP / 2FA 用。各桁 box、focus 自動移動、paste 対応。otp / numeric variant。"
      >
        <PinInputDemo />
      </Section>

      <Section
        title="Pagination"
        description="Prev/Next + 番号 + ellipsis。current は bg-fg + text-bg、disabled は opacity-50。"
      >
        <PaginationDemo />
      </Section>

      <Section
        title="Toggle Group"
        description="segmented button group。single (排他) と multiple (複数選択)。pressed は bg-fg + text-bg。"
      >
        <ToggleGroupDemo />
      </Section>

      <Section
        title="Rating Group"
        description="星 5 段階。allowHalf で 0.5 刻み、ItemContext で highlighted / half を受け取り fill 切替。"
      >
        <RatingGroupDemo />
      </Section>

      <Section
        title="Tree View"
        description="フォルダ風 nav。createTreeCollection + 再帰 renderNode、BranchIndicator は data-[state=open]:rotate-90 で chevron 回転。"
      >
        <TreeViewDemo />
      </Section>

      <Section
        title="Collapsible"
        description="Show more / advanced options。height アニメは accordion と同じ keyframes (--animate-accordion-down/up) 流用。"
      >
        <CollapsibleDemo />
      </Section>
    </div>
  );
}
