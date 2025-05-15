// components/LiteLandingPage.tsx - LP統合親コンポーネント
import React from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import FeatureSection from "@/components/FeatureSection";
import SampleSection from "@/components/SampleSection";
import VoiceSection from "@/components/VoiceSection";
import CompareSection from "@/components/CompareSection";
import LineSection from "@/components/LineSection";

export default function LiteLandingPage() {
  return (
    <>
      <Head>
        <title>GPT教材生成Lite版｜たった3分で教材作成完了</title>
        <meta name="description" content="GPTがあなたの代わりに教材を自動生成。教科・学年・単元を入力するだけで、要点まとめとクイズを即作成。無料で今すぐ体験。" />

        {/* Open Graph（Facebook・LINE・Discord など） */}
        <meta property="og:title" content="GPT教材生成Lite版｜たった3分で教材作成完了" />
        <meta property="og:description" content="教科・学年・単元を入力するだけ。GPTが教材とクイズを3分で自動生成！" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gpt-tutor-lite.vercel.app/" />
        <meta property="og:image" content="/ogp_common.png" />

        {/* Twitterカード専用設定（キャッシュ更新のため v2 に変更） */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GPT教材生成Lite版｜たった3分で教材作成完了" />
        <meta name="twitter:description" content="教科・学年・単元を入力するだけ。GPTが教材とクイズを3分で自動生成！" />
        <meta name="twitter:image" content="/ogp_twitter_v2.png" />
      </Head>

      <main className="px-4 py-12 max-w-4xl mx-auto space-y-12">
        <HeroSection />
        <PainSection />
        <FeatureSection />
        <SampleSection />
        <VoiceSection />
        <CompareSection />
        <LineSection />
      </main>
    </>
  );
}
