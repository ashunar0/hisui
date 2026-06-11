import type { ReactNode } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toaster } from "@/components/ui/toast";
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
