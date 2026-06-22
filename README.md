# Hisui UI

個人用 React component registry。 Ark UI + Tailwind v4 で組んだ 63 個の primitive を shadcn 方式 (copy-paste) で consumer project に配布する。

- **63 primitive** + 5 foundations (Colors / Typography / Spacing / Shadow / Radius)
- **Next.js (App Router) + Vite** 両対応 (framework 自動判定)
- **`"use client"` 自動付与**: 必要な primitive にのみ注入済 (server-safe 18 個は plain)
- 依存も自動 install (pnpm / yarn / npm / bun 自動検出)

## Quick start

任意の Next.js または Vite project で:

```bash
# 1. 初期化 (hisui.json + tokens + lib/utils + lib/slot)
npx -y github:ashunar0/hisui init

# 2. primitive を追加 (registry dep + npm dep 自動解決)
npx -y github:ashunar0/hisui add button dialog menu

# 全部入れたい時
npx -y github:ashunar0/hisui add --all
```

## Commands

### `hisui init`

1. `package.json` から framework (next / vite) を検出
2. `tsconfig.json` の `paths` から alias を検出 (default `@/*`)
3. `hisui.json` を生成
4. `src/lib/utils.ts`, `src/lib/slot.ts` を書き出し
5. token block 255 行を consumer の global css に append (`/* hisui-ui:tokens:start */` ... `:end */` で囲む、 idempotent)
6. base deps を install (`tailwindcss`, `@tailwindcss/vite`, `clsx`, `tailwind-merge`, `@fontsource-variable/wix-madefor-text`)

### `hisui add <name...>`

1. `registry/<name>.json` を fetch
2. `registryDependencies` を再帰展開 (重複除去)
3. 各 file を fetch + import alias を consumer 設定に書き換えて書き出し
4. 累積した npm deps を 1 回でまとめて install

## `hisui.json`

`init` で生成される consumer 側 config:

```json
{
  "$schema": "https://raw.githubusercontent.com/ashunar0/hisui/main/registry/schema.json",
  "framework": "next",
  "css": "src/app/globals.css",
  "aliases": {
    "ui": "@/components/ui",
    "lib": "@/lib"
  },
  "paths": {
    "ui": "src/components/ui",
    "lib": "src/lib"
  },
  "packageManager": "pnpm"
}
```

| key | 用途 |
|---|---|
| `framework` | `next` \| `vite` (auto-detected) |
| `css` | token を append する global css の path |
| `aliases.ui` / `aliases.lib` | 生成 file 内の import に使う alias |
| `paths.ui` / `paths.lib` | file 配置先の filesystem path |
| `packageManager` | install 時に使う pm |

手動編集して別 alias / 別 path に変えても OK。

## 環境変数

- `HISUI_REGISTRY` — registry base URL を上書き (default: `https://raw.githubusercontent.com/ashunar0/hisui/main`)。 ローカル開発時は `file:///path/to/hisui` で逃せる

## Available primitives

全 63 個。 各 primitive の demo / props は dev で `pnpm dev` → `/docs` で確認できる。

<details>
<summary>List (alphabetical)</summary>

Accordion / Alert / AlertDialog / AspectRatio / Avatar / Badge / Breadcrumb / Button / Card / Carousel / Chart / Checkbox / Clipboard / Collapsible / ColorPicker / Combobox / Command / DatePicker / Dialog / Drawer / Editable / Empty / Field / Fieldset / FileUpload / Heading / HoverCard / IconButton / Input / Kbd / Listbox / Menu / NumberInput / Pagination / PasswordInput / PinInput / Popover / Progress / QrCode / RadioGroup / RatingGroup / ScrollArea / SegmentGroup / Select / Separator / Sidebar / Skeleton / Slider / Spinner / Splitter / Stack / Steps / Switch / Table / Tabs / TagsInput / Textarea / Toast / Toggle / ToggleGroup / Toolbar / Tooltip / TreeView

</details>

## Repository layout

```
hisui/
├── bin/hisui.mjs              CLI (Node 標準 API のみ)
├── registry/                  shadcn-compatible manifest (機械生成)
│   ├── index.json             全 primitive 一覧
│   ├── init.json              base files manifest
│   └── <name>.json            各 primitive の manifest
├── scripts/
│   ├── build-registry.mjs     registry JSON 生成
│   └── inject-use-client.mjs  必要 primitive に "use client" 注入
└── src/
    ├── lib/{utils,slot}.ts    base utilities
    ├── index.css              token 全 255 行
    └── components/ui/*.tsx    全 63 primitive (source of truth)
```

## Contributing

個人 registry のため外部 contribution は受け付けない。 自分用に fork は自由。

## License

MIT
