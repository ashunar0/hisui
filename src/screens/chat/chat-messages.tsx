import { Copy, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const MESSAGES: Message[] = [
  {
    role: "user",
    content: "React Server Components はどんな時に使うのがいい？",
  },
  {
    role: "assistant",
    content: `React Server Components (RSC) は、サーバー側でレンダリングして JS バンドルに含めないコンポーネントです。次のような場面で特に活きます。

- データベースや API への直接アクセスが必要な時 (fetch / DB クエリをコンポーネント内に書ける)
- 大きなライブラリ (Markdown パーサーや構文ハイライタなど) を使う時 (クライアントに送らない分、バンドルが小さくなる)
- 認証情報や API キーを使う時 (クライアントに漏れない)

逆に useState や onClick などインタラクティブなものを扱う部分は Client Component に切り出します。`,
  },
  {
    role: "user",
    content:
      "Server Component と Client Component の境界はどう決めるのが筋がいい？",
  },
  {
    role: "assistant",
    content: `「葉に近いところを Client にする」のが原則です。

ツリーの上の方を Client にしてしまうと、その配下がぜんぶ Client 側で動くことになり、Server Component の恩恵が失われます。なので、interactive な小さいパーツ (ボタン、フォーム入力、モーダルなど) だけを 'use client' 付きで切り出して、それ以外は Server のままにしておくのが基本。

もう 1 つのコツは、Server Component を Client Component に props で渡すことです。<ClientWrapper><ServerChild /></ClientWrapper> のように書けば、Client 側からは children として受け取るだけで、内部のレンダリングはサーバーで完結します。`,
  },
  {
    role: "user",
    content:
      "RSC とデータフェッチの相性についてもう少し詳しく。useEffect で fetch するのと何が違うの？",
  },
  {
    role: "assistant",
    content: `一番大きい違いは「fetch のタイミング」と「ウォーターフォール」です。

useEffect で fetch する従来パターンでは、

1. HTML が届く
2. JS がダウンロードされて hydrate
3. useEffect が走って fetch スタート
4. レスポンスが返ってきて再レンダリング

という階段が発生します。ユーザーが見るのは、最初は空の状態 → ローディング → 中身が出る、の 3 段階。

RSC だと fetch はサーバー側で先に終わってる状態で HTML が届くので、ユーザーは最初から中身が描かれた画面を見ます。ローディングのちらつきが消えるだけじゃなく、複数のコンポーネントが個別に fetch していてもサーバー側で並列処理できるのでウォーターフォールも起きにくい。

ただし、検索フィルタみたいに「ユーザーの操作で再 fetch したい」場合は依然 Client Component と useState で組むのが筋です。`,
  },
  {
    role: "user",
    content: "Server Actions も RSC とセットで使う前提？",
  },
  {
    role: "assistant",
    content: `セットで使う前提というより、「Form の post を fetch なしで書けるショートカット」と思っておけば十分です。

\`'use server'\` を付けた関数を form の action に渡すと、ユーザーが submit した時にその関数がサーバー側で実行されます。クライアントから JSON を作って API に POST する、という典型的なボイラープレートが消える。

データ更新後の再フェッチも \`revalidatePath\` / \`revalidateTag\` で明示できるので、SWR や React Query で書いていた mutation → invalidate の流れがフレームワーク側に寄せられます。

ちなみに Server Actions は RSC が無くても (例えば pages router でも) 単体では使えるんですが、UI の更新側が宣言的じゃないと旨味が薄いので、実質 RSC とセットで使うことになります。`,
  },
  {
    role: "user",
    content: "テストはどうやって書く？Server Component を unit test するのは難しそう。",
  },
  {
    role: "assistant",
    content: `現実的には、Server Component の testing は今のところ少し過渡期です。アプローチを 3 つに分けて整理すると、

1. ロジック層を切り出して普通の関数として test する
2. Client Component 部分は React Testing Library + jsdom で従来通り
3. Server Component 全体を本物のサーバーで動かして E2E (Playwright など) で見る

\`async function Page()\` を直接 render する公式ルートはまだ薄いです。Vitest の React Server Components サポートは出てきていますが、エコシステム全体としては (2) と (3) のハイブリッドで進めるプロジェクトが多い印象。

DB 触る Server Component は (3) でしかまともに検証できないことが多いので、最初から testcontainers などで一時 DB を立てる方針にしておくと後がラクです。`,
  },
  {
    role: "user",
    content: "ありがとう。最後に、これから RSC を学ぶならどこから始めるのがおすすめ？",
  },
  {
    role: "assistant",
    content: `次の順序で触ると詰まりにくいです。

1. **Next.js App Router の公式チュートリアル** — RSC は単体で動かすより、フレームワーク経由で触る方が圧倒的にラクなので、まず Next.js で 1 つ簡単なアプリ (TODO や Blog) を作る
2. **'use client' の境界を意識する** — どのコンポーネントが Server か Client か、tree を眺めながら線を引く練習。最初は混乱するけど、これに慣れると一気に視界が開けます
3. **Server Actions で 1 つ form を書く** — fetch / API route なしで mutation を書く体験をすると RSC のメリットがわかりやすい
4. **Suspense と loading.tsx で streaming を試す** — 並列フェッチとストリーミングが組み合わさると、ユーザー体験がガラッと変わる

このあと興味があれば React Conf 2023 の Andrew Clark や Sebastian の talk を見ると、「なぜこの設計なのか」が腹落ちします。`,
  },
];

export function ChatMessages() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8">
      {MESSAGES.map((m, i) =>
        m.role === "user" ? (
          <div
            key={i}
            className="max-w-[80%] self-end whitespace-pre-wrap rounded-2xl bg-surface-sunken px-4 py-2.5 text-sm text-fg"
          >
            {m.content}
          </div>
        ) : (
          <div key={i} className="flex flex-col gap-2">
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-fg">
              {m.content}
            </div>
            <div className="flex items-center gap-0.5">
              <IconButton
                aria-label="コピー"
                className="size-7 text-fg-muted hover:text-fg-soft"
              >
                <Copy className="size-3.5" />
              </IconButton>
              <IconButton
                aria-label="グッド"
                className="size-7 text-fg-muted hover:text-fg-soft"
              >
                <ThumbsUp className="size-3.5" />
              </IconButton>
              <IconButton
                aria-label="バッド"
                className="size-7 text-fg-muted hover:text-fg-soft"
              >
                <ThumbsDown className="size-3.5" />
              </IconButton>
              <IconButton
                aria-label="再生成"
                className="size-7 text-fg-muted hover:text-fg-soft"
              >
                <RotateCcw className="size-3.5" />
              </IconButton>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
