"use client";

import { useEffect, useState, useRef } from "react";

const RESPONSES = [
  "Retrieval-augmented generation grounds language model outputs in retrieved evidence, reducing hallucination while preserving fluency.",
  "Agentic systems plan, call tools, and adapt their next action based on what each tool call returns.",
  "A well-evaluated pipeline treats retrieval quality and generation faithfulness as separate, measurable concerns.",
];

export default function TokenGeneration() {
  const [displayed, setDisplayed] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const charIndex = useRef(0);

  useEffect(() => {
    charIndex.current = 0;
    setDisplayed("");

    const currentText = RESPONSES[responseIndex];

    const interval = setInterval(() => {
      charIndex.current += 1;
      setDisplayed(currentText.slice(0, charIndex.current));

      if (charIndex.current >= currentText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setResponseIndex((prev) => (prev + 1) % RESPONSES.length);
        }, 2000);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [responseIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-8">
      <div className="max-w-2xl w-full rounded-2xl border border-border bg-white/[.03] p-8 font-mono text-sm">
        <div className="flex gap-2 mb-6">
          <span className="w-3 h-3 rounded-full bg-red-400/40" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/40" />
          <span className="w-3 h-3 rounded-full bg-green-400/40" />
        </div>
        <p className="text-foreground/90 leading-relaxed">
          {displayed}
          <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-pulse align-middle" />
        </p>
      </div>
    </div>
  );
}