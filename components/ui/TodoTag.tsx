"use client";

import React from "react";
import { Todo, isTodo } from "@/content/site";

interface TodoTagProps {
  value: Todo | string | null | undefined;
  fallback?: React.ReactNode;
  prefix?: string;
  className?: string;
}

export function TodoTag({
  value,
  fallback = null,
  prefix = "TODO:",
  className = "",
}: TodoTagProps) {
  const isDev = process.env.NODE_ENV !== "production";

  if (isTodo(value)) {
    if (isDev) {
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono border border-dashed border-signal text-signal bg-signal/5 rounded-sm ${className}`}
          title="Required before production launch"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          <span>{prefix} {value.todo}</span>
        </span>
      );
    }
    return <>{fallback}</>;
  }

  if (typeof value === "string") {
    return <>{value}</>;
  }

  return <>{fallback}</>;
}
