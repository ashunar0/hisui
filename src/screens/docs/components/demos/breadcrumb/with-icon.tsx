import { Folder, Home } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function BreadcrumbWithIconDemo() {
  return (
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
  );
}
