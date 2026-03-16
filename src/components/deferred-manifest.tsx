"use client";

import { useEffect } from "react";

/**
 * Injects the manifest link after the page is interactive to avoid adding it
 * to the critical path. The manifest is only needed for PWA install, not for
 * initial render or LCP.
 */
export function DeferredManifest() {
  useEffect(() => {
    if (document.querySelector('link[rel="manifest"]')) return;

    const link = document.createElement("link");
    link.rel = "manifest";
    link.href = "/site.webmanifest";
    document.head.appendChild(link);
  }, []);

  return null;
}
