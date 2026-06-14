import { Pencil } from "lucide-react";
import { Editable } from "@/components/ui/editable";

export function EditableDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          focus mode (click → edit、blur で auto save)
        </span>
        <Editable.Root defaultValue="Untitled deal" placeholder="名前を入力" className="w-80">
          <Editable.Label>Deal name</Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          with Edit / Submit / Cancel trigger (Ark が editing 状態で auto swap)
        </span>
        <Editable.Root defaultValue="ぼくのチーム" placeholder="チーム名" className="w-80">
          <Editable.Label>Team name</Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            <Editable.EditTrigger />
            <Editable.SubmitTrigger />
            <Editable.CancelTrigger />
          </Editable.Control>
        </Editable.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          dblclick + Context (heading style、editing 中だけ helper text 表示)
        </span>
        <Editable.Root
          defaultValue="Untitled document"
          activationMode="dblclick"
          className="w-80 gap-2"
        >
          <Editable.Context>
            {(api) => (
              <>
                <Editable.Area className="group items-center gap-2">
                  <Editable.Preview className="text-2xl font-semibold tracking-tight" />
                  <Editable.Input className="h-10 text-2xl font-semibold tracking-tight" />
                  {!api.editing && (
                    <button
                      type="button"
                      onClick={() => api.edit()}
                      aria-label="Rename"
                      className="inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-fg-subtle outline-none transition-colors hover:bg-hover hover:text-fg focus-visible:ring-2 focus-visible:ring-fg/30"
                    >
                      <Pencil className="size-3.5" strokeWidth={2.25} />
                    </button>
                  )}
                </Editable.Area>
                <span className="text-xs text-fg-muted">
                  {api.editing
                    ? "Enter で保存 / Esc でキャンセル"
                    : "Double-click でリネーム"}
                </span>
              </>
            )}
          </Editable.Context>
        </Editable.Root>
      </div>
    </div>
  );
}
