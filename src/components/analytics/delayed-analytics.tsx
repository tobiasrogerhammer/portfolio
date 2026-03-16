"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

/**
 * Loads Google Analytics after a delay to reduce impact on main thread during initial load.
 * On mobile, analytics is deferred longer to improve TBT.
 */
export function DelayedAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024
    const delay = isMobile ? 5000 : 3000
    const id = setTimeout(() => setShouldLoad(true), delay)
    return () => clearTimeout(id)
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z92ZGV8X2K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z92ZGV8X2K');
        `}
      </Script>
    </>
  )
}
