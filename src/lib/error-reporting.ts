// src/lib/error-reporting.ts

export type LovableErrorContext = {
  boundary?: string;
  [key: string]: unknown;
};

export function reportLovableError(
  error: unknown,
  context?: LovableErrorContext
): void {
  console.error("[Lovable Error]", {
    error,
    context,
    timestamp: new Date().toISOString(),
  });
}

export function captureError(
  error: unknown,
  context?: LovableErrorContext
): void {
  reportLovableError(error, context);
}

export function logError(
  error: unknown,
  context?: LovableErrorContext
): void {
  reportLovableError(error, context);
}

export function initializeErrorReporting(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.addEventListener("error", (event) => {
    reportLovableError(event.error || event.message, {
      boundary: "window_error",
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    reportLovableError(event.reason, {
      boundary: "unhandled_promise_rejection",
    });
  });
}

export default {
  reportLovableError,
  captureError,
  logError,
  initializeErrorReporting,
};