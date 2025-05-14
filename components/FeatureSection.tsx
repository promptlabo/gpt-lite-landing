// FeatureSection.tsx - Lite版でできること
import React from "react";

export default function FeatureSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Lite版でできること</h2>
      <ul className="space-y-2">
        <li><strong>入力内容：</strong> 教科、学年、単元</li>
        <li><strong>出力内容：</strong> 要点まとめ、理解チェッククイズ</li>
        <li><strong>特徴：</strong> アカウント不要・入力してボタンを押すだけ・即完了</li>
      </ul>
    </section>
  );
}

