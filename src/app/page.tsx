import { Suspense, lazy } from "react"
import { NavigationWrapper } from "@/components/layout/navigation-wrapper"
import Hero from "@/components/sections/hero"
import { client } from "@/sanity/client"
import { allPostsQuery } from "@/sanity/queries"
import { urlFor } from "@/sanity/image"
import type { SanityImageSource } from "@sanity/image-url"

const ScrollToTop = lazy(() => import("@/components/layout/scroll-to-top"))

// Lazy load below-the-fold components for better initial load performance
const About = lazy(() => import("@/components/sections/about"))
const Experience = lazy(() => import("@/components/sections/experience"))
const Education = lazy(() => import("@/components/sections/education"))
const Projects = lazy(() => import("@/components/sections/projects"))
const Footer = lazy(() => import("@/components/layout/footer"))

type BlogPreviewPost = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  mainImage?: SanityImageSource
}

// Loading fallback component
const SectionLoader = () => (
  <div className="py-12 sm:py-16 lg:py-20 flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
)

export default async function Home() {
  let posts: BlogPreviewPost[] = []
  try {
    posts = await client.fetch<BlogPreviewPost[]>(allPostsQuery)
  } catch (error) {
    console.error("Failed to fetch latest blog posts for homepage: ", error)
  }
  const featuredPosts = posts.slice(0, 2).map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    imageUrl: post.mainImage
      ? urlFor(post.mainImage).width(1200).height(675).url()
      : null,
  }))

  return (
    <div className="min-h-screen">
        <NavigationWrapper />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About featuredPosts={featuredPosts} />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </div>
  )
}
