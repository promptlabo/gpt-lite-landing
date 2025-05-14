// PainSection.tsx - ユーザーの悩み提示セクション
import React from "react";

export default function PainSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">こんなお悩みありませんか？</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>教材作成に毎回1〜2時間もかかってしまう…</li>
        <li>自作教材の質に自信が持てない…</li>
        <li>AIを使いたいけど、設定が難しそう…</li>
      </ul>
    </section>
  );
}

