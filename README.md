# GPT教材生成Lite版 LPテンプレート

Next.js + Tailwind CSS で構築された、教材生成アプリ用のランディングページテンプレートです。

---

## 🚀 セットアップ手順

```bash
# 1. リポジトリをクローン
git clone https://github.com/yourname/gpt-lite-landing.git
cd gpt-lite-landing

# 2. パッケージをインストール
npm install

# 3. 開発サーバー起動
npm run dev
```

開発環境は `http://localhost:3000` で表示されます。

---

## 🖼 OGP画像の差し替え

- `public/ogp-lite.png` を任意のバナーに差し替えてください。
- `index.tsx` の `<Head>` 内のURLとタイトルも更新可能です。

---

## ✅ 機能一覧

- セクション別にコンポーネント分割
- LINE登録・GUI体験リンク付き
- 正式版との比較表表示
- OGP対応済・スマホ表示対応

---

## 🌐 Vercelデプロイ方法

1. GitHubにプッシュ後、[Vercel](https://vercel.com/)にログイン
2. 「New Project」→ GitHub連携 → このリポジトリを選択
3. フレームワークとして `Next.js` を自動認識 → 「Deploy」クリック

すぐに公開されます。

---

## 📈 LINE登録CVトラッキング（任意）

Google Tag Managerや gtag.js を使い、以下のようにトラッキング可能です：

```tsx
<Link
  href="https://lin.ee/xxx"
  onClick={() => gtag('event', 'conversion', { send_to: 'AW-XXXXXX/XXXXXX' })}
>
  LINE登録する
</Link>
```

---

## 🧪 A/Bテスト対応（例）

Heroセクションなどを `variant=A/B` で切り替え可能：

```ts
const isVariantB = typeof window !== 'undefined' && window.location.search.includes('variant=B');
```

---

## ライセンス
MIT License / 商用利用OK

