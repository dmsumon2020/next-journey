"use client";

import { useRouter } from "next/router";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.reload();
      reset();
    });
  };

  return (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={() => reload()}>Reset</button>
    </div>
  );
}
