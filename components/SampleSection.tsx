// SampleSection.tsx - 教材サンプルセクション
import React from "react";

export default function SampleSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">教材サンプル</h2>
      <div className="border p-4 rounded-xl bg-gray-50">
        <p className="font-bold">【数学】中学2年 - 一次関数</p>
        <p className="mt-2">■ 教材内容（要点まとめ）<br />
        1. 一次関数とは y=ax+b の形で表せる関数<br />
        2. グラフは直線で、a は傾き、b は切片を表す</p>
        <p className="mt-4">■ 理解チェッククイズ<br />
        Q1: 一次関数の一般式は？<br />
        Q2: 傾き2・切片-3の式は？<br />
        Q3: x=1〜3 のときの y を求め、グラフの形を説明しよう</p>
      </div>
    </section>
  );
}

