"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

export default function FunFact() {
  return (
    <div>
      <p>{useAnimatedCounter(1000, 0, 3)}</p>
    </div>
  );
}
