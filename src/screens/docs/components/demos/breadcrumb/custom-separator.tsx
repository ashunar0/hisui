"use client";

import { Slash } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function BreadcrumbCustomSeparatorDemo() {
  return (
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
  );
}
