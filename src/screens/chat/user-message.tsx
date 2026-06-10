export function UserMessage({ content }: { content: string }) {
  return (
    <div className="max-w-[80%] self-end whitespace-pre-wrap rounded-2xl bg-surface-sunken px-4 py-2.5 text-sm text-fg">
      {content}
    </div>
  );
}
