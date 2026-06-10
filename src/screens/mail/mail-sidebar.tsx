import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { TeamSwitcher } from "@/components/team-switcher";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import { UserMenu } from "@/components/user-menu";
import {
  ACTIVE_FOLDER,
  CURRENT_TEAM,
  FOLDERS,
  LABELS,
  RECIPIENT_EMAIL,
  RECIPIENT_NAME,
  TEAMS,
} from "@/screens/mail/data";

export function MailSidebar() {
  return (
    <Sidebar.Root>
      <Sidebar.Header>
        <TeamSwitcher teams={TEAMS} current={CURRENT_TEAM} />
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group label="メールボックス">
          {FOLDERS.map(({ label, icon: Icon, count }) => (
            <Sidebar.MenuButton
              key={label}
              href="#"
              active={label === ACTIVE_FOLDER}
            >
              <Icon className="size-4" />
              {label}
              {count !== undefined && (
                <span className="ml-auto text-fg-muted text-xs">{count}</span>
              )}
            </Sidebar.MenuButton>
          ))}
        </Sidebar.Group>
        <Sidebar.Group label="Labels">
          {LABELS.map(({ label, dot }) => (
            <Sidebar.MenuButton key={label} href="#">
              <span className={cn("size-2 rounded-full", dot)} />
              {label}
            </Sidebar.MenuButton>
          ))}
        </Sidebar.Group>
      </Sidebar.Content>
      <Sidebar.Footer>
        <div className="flex flex-col gap-2">
          <Button size="md" className="w-full gap-2">
            <Pencil className="size-4" />
            New Email
          </Button>
          <UserMenu name={RECIPIENT_NAME} email={RECIPIENT_EMAIL} />
        </div>
      </Sidebar.Footer>
    </Sidebar.Root>
  );
}
