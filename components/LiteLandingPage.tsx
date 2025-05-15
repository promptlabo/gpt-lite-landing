// ✅ 修正後の LiteLandingPage.tsx
import React from "react";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import FeatureSection from "@/components/FeatureSection";
import SampleSection from "@/components/SampleSection";
import VoiceSection from "@/components/VoiceSection";
import CompareSection from "@/components/CompareSection";
import LineSection from "@/components/LineSection";

export default function LiteLandingPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto space-y-12">
      <HeroSection />
      <PainSection />
      <FeatureSection />
      <SampleSection />
      <VoiceSection />
      <CompareSection />
      <LineSection />
    </main>
  );
}
