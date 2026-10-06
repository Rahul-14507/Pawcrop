import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper flex flex-col items-center justify-center p-6 text-center font-mono">
      <div className="p-8 bg-paper hairline-all rounded shadow-subtle max-w-md w-full space-y-4">
        <span className="px-2 py-0.5 bg-signal/10 text-signal border border-signal/30 text-xs font-bold rounded">
          404 // DIAGNOSTIC FAULT
        </span>
        <h1 className="font-display text-3xl font-bold text-ink">Page Not Found</h1>
        <p className="text-xs text-ink/70 font-sans">
          The requested system route does not exist in the PAWCROP telemetry network.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-paper text-xs font-mono font-bold rounded hover:bg-leaf transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
