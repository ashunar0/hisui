"use client";

import { Heading } from "@/components/ui/heading";

export default function HeadingPageTitleDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Heading as="h1" size="2xl">
        Account settings
      </Heading>
      <Heading as="h1" size="3xl">
        Welcome back
      </Heading>
    </div>
  );
}
