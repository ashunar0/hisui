import { Editable } from "@/components/ui/editable";

export function EditableDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-80">
        <Editable.Root defaultValue="Untitled deal" placeholder="名前を入力">
          <Editable.Label>Deal name (focus で編集)</Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable.Root>
      </div>

      <div className="w-80">
        <Editable.Root defaultValue="ぼくのチーム" placeholder="チーム名">
          <Editable.Label>Team name (明示的な edit / save / cancel)</Editable.Label>
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

      <div className="w-80">
        <Editable.Root
          defaultValue="Double-click to edit me"
          activationMode="dblclick"
        >
          <Editable.Label>activationMode="dblclick"</Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable.Root>
      </div>
    </div>
  );
}
