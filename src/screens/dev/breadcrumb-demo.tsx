import { Folder, Home, Slash } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function BreadcrumbDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Basic />
      <CustomSeparator />
      <WithIcon />
      <Collapsed />
    </div>
  );
}

function Basic() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        基本パターン。 Root / List / Item / Link (clickable) / CurrentLink
        (aria-current=page、 太字 + text-fg) / Separator (default ChevronRight)。
      </p>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>Breadcrumb</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </div>
  );
}

function CustomSeparator() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Separator に children を渡して切替。 slash (/) や dot (·) など。
      </p>
      <div className="flex flex-col gap-2">
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Workspace</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              <Slash className="size-3" />
            </Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Projects</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              <Slash className="size-3" />
            </Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>ui-lab</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>·</Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Guides</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>·</Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Theming</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
    </div>
  );
}

function WithIcon() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Item の中に icon + label。 inline-flex gap-1.5 で自然に並ぶ。
      </p>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link
              href="#"
              className="inline-flex items-center gap-1.5"
            >
              <Home className="size-3.5" />
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link
              href="#"
              className="inline-flex items-center gap-1.5"
            >
              <Folder className="size-3.5" />
              src
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink className="inline-flex items-center gap-1.5">
              <Folder className="size-3.5" />
              components
            </Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </div>
  );
}

function Collapsed() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        長いパスを Ellipsis で省略。 click で expand UI を出す想定 (この demo は
        click 無し)。
      </p>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Ellipsis />
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Settings</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>Billing</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </div>
  );
}
