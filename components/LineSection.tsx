// LineSection.tsx - LINE登録特典セクション
import React from "react";
import Link from "next/link";

export default function LineSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">LINE登録で特典を受け取る</h2>
      <p>今だけの限定特典：</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>サンプル教材PDF（5種）プレゼント</li>
        <li>アップデート情報を先行配信</li>
      </ul>
      <Link href="https://lin.ee/KGoZbJ9b" className="inline-block mt-4 bg-green-700 text-white px-5 py-2 rounded-xl">
        LINE登録する（無料）
      </Link>
    </section>
  );
}

