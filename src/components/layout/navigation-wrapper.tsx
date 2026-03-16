"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"

const Navigation = dynamic(() => import("@/components/layout/navigation"), {
  loading: () => (
    <nav className="fixed top-0 w-full bg-background/80 border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
            <Image src="/logo/icon.svg" alt="" width={32} height={32} className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0" />
            <span className="text-lg sm:text-xl font-bold text-brand-primary tracking-tight">Tobias Hammer</span>
          </Link>
          <div className="w-10 h-10" />
        </div>
      </div>
    </nav>
  ),
  ssr: false,
})

export function NavigationWrapper() {
  return <Navigation />
}
