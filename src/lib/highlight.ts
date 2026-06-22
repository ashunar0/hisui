import { codeToHtml, type BundledLanguage } from "shiki";

export function highlightCode(
  code: string,
  lang: BundledLanguage = "tsx",
): Promise<string> {
  return codeToHtml(code, {
    lang,
    themes: { light: "one-dark-pro", dark: "one-dark-pro" },
    defaultColor: "dark",
  });
}
