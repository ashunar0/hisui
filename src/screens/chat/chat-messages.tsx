import { AssistantMessage } from "@/screens/chat/assistant-message";
import { MESSAGES } from "@/screens/chat/data";
import { UserMessage } from "@/screens/chat/user-message";

export function ChatMessages() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8">
      {MESSAGES.map((m, i) =>
        m.role === "user" ? (
          <UserMessage key={i} content={m.content} />
        ) : (
          <AssistantMessage key={i} content={m.content} />
        ),
      )}
    </div>
  );
}
