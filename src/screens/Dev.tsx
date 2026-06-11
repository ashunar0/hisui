import type { ReactNode } from "react";
import { Link } from "react-router";
import { Bold, Italic, Link2, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toaster } from "@/components/ui/toast";
import { Tooltip } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";

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
        <div className="flex flex-wrap gap-3">
          <BasicDialog />
          <DestructiveDialog />
          <FormDialog />
        </div>
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
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold tracking-tight text-fg">
          {title}
        </h2>
        <p className="text-xs text-fg-muted">{description}</p>
      </div>
      <div className="rounded-md border border-border bg-surface p-6">
        {children}
      </div>
    </section>
  );
}

function BasicDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Basic</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Enable two-factor auth?</Dialog.Title>
        <Dialog.Description>
          You'll be asked for a code from your authenticator app on every sign
          in.
        </Dialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <Dialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button>Enable</Button>
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}

function DestructiveDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Destructive</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Delete this workspace?</Dialog.Title>
        <Dialog.Description>
          This permanently deletes all data, members, and integrations. This
          action cannot be undone.
        </Dialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <Dialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Delete workspace
            </Button>
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}

function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox.Root>
        <Checkbox.Control />
        <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Remember me on this device</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root checked="indeterminate">
        <Checkbox.Control />
        <Checkbox.Label>Select all (3 of 5 selected)</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled>
        <Checkbox.Control />
        <Checkbox.Label>Disabled option</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Disabled checked</Checkbox.Label>
      </Checkbox.Root>
    </div>
  );
}

function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Simple hint</Tooltip.Content>
      </Tooltip.Root>

      <div className="flex items-center gap-1 rounded-md border border-border bg-surface p-1">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Bold className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Bold (⌘B)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Italic className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Italic (⌘I)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Underline className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Underline (⌘U)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Link2 className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Insert link (⌘K)</Tooltip.Content>
        </Tooltip.Root>
      </div>
    </div>
  );
}

function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Saved successfully",
            description: "Your changes are live.",
            type: "success",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Couldn't save",
            description: "Network error. Try again.",
            type: "error",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Storage almost full",
            description: "Free up space to keep syncing.",
            type: "warning",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Build started",
            description: "We'll notify you when it's done.",
            type: "info",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Uploading...",
            type: "loading",
            duration: 2500,
          })
        }
      >
        Loading
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Reminder",
            description: "Just a neutral toast.",
          })
        }
      >
        Neutral
      </Button>
    </div>
  );
}

function FormDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Form</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>New project</Dialog.Title>
        <Dialog.Description>
          Give it a name and a short description.
        </Dialog.Description>
        <form
          className="mt-5 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input placeholder="Acme launch" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Description</Field.Label>
            <Textarea placeholder="Short summary" rows={3} />
          </Field.Root>
          <div className="mt-2 flex justify-end gap-2">
            <Dialog.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.CloseTrigger>
            <Dialog.CloseTrigger asChild>
              <Button type="submit">Create</Button>
            </Dialog.CloseTrigger>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
