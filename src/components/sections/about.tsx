"use client"

import { Monitor, Server, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BlogPostCard } from "@/components/features/blog-post-card"
import { StatisticsDashboard } from "@/components/features/statistics-dashboard"

/** Add as many paragraphs as you like — each string is rendered as its own paragraph under "More about me". */
const ABOUT_STORY: string[] = [
  "My journey in software development began five years ago, and since then I've been focused on building products that are both elegant and functional. I enjoy transforming complex challenges into simple, efficient solutions that make a real impact.",
  "Beyond coding, I'm always looking for new opportunities to innovate, collaborate, and build meaningful products that make a difference.",
  "I believe in continuous learning and staying current with the latest tools and trends in the industry to deliver high-quality, forward-thinking solutions.",
]
type FeaturedPost = {
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  imageUrl?: string | null
}

type AboutProps = {
  featuredPosts: FeaturedPost[]
}

const About = ({ featuredPosts }: AboutProps) => {
  const skills = [
    {
      category: "Frontend",
      items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "JavaScript", "WebSockets"],
      icon: Monitor,
      color: "#3B82F6", // Blue
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.15) 100%)",
    },
    {
      category: "Backend",
      items: ["Python", "Node.js", "Java", "SQL", "Express", "Firebase", "ConvexDB"],
      icon: Server,
      color: "#EF4444", // Red
      gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(248, 113, 113, 0.15) 100%)",
    },
    {
      category: "Tools",
      items: ["GitHub", "Creative cloud", "Vercel", "Postman", "Figma", "VirtualBox"],
      icon: Wrench,
      color: "#10B981", // Green
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.15) 100%)",
    },
  ]

  return (
    <section id="about" className="pt-12 sm:pt-16 lg:pt-20 pb-0 relative overflow-hidden px-0 sm:px-6 lg:px-8 bg-section-about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-section-about via-section-about to-section-about" />
      
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full blur-2xl animate-pulse bg-brand-primary/10" style={{ backgroundColor: '#124D95', opacity: 0.1 }} />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-2xl animate-pulse delay-1000 bg-brand-secondary/10" style={{ backgroundColor: '#FF6B6B', opacity: 0.1 }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12 px-4 sm:px-0">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-brand-primary">
              About Me
            </h2>
            <div className="h-1 w-16 sm:w-24 mx-auto rounded-full bg-brand-primary"></div>
          </div>
        </div>

        <div className="mb-12 sm:mb-14 lg:mb-0">
          {/* Content with text wrapping around image */}
          <div className="relative">
            {/* Mobile: Full-bleed image fading into section, overlapping content */}
            <div className="lg:hidden">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <Image
                  src="/renowDinner.jpeg"
                  alt="Tobias Hammer with the Renow team"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '78% 50%' }}
                  sizes="100vw"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none about-mobile-hero-fade"
                />
                <div className="absolute top-0 left-0 right-0 p-4 sm:p-5 pb-12 text-center">
                  <p className="text-sm font-semibold text-white drop-shadow-md">
                    20 years · Student · Trondheim, Norway
                  </p>
                </div>
              </div>

              <div className="relative mt-8 sm:mt-10 px-4 space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-brand-primary">
                    My story
                  </h3>
                  <div className="space-y-4">
                    {ABOUT_STORY.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: 12-column grid layout (text left, image right) */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-12 lg:gap-8 items-start">
                {/* Left Column (5 cols): My Story */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-4 leading-relaxed text-muted-foreground text-base lg:text-lg font-normal">
                    <div className="space-y-3 mb-3">
                      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-brand-primary">
                        My Story
                      </h3>
                      <div className="h-0.5 w-16 rounded-full bg-brand-primary" />
                    </div>
                    {ABOUT_STORY.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Right Column (7 cols): Profile Image */}
                <div className="lg:col-span-7 space-y-6">
                  <div
                    className="relative h-[420px] w-full overflow-hidden rounded-2xl"
                    style={{
                      boxShadow: '0 0 20px rgba(18, 77, 149, 0.25), 0 0 40px rgba(18, 77, 149, 0.15)',
                    }}
                  >
                    <Image
                      src="/renowDinner.jpeg"
                      alt="Tobias Hammer with the Renow team"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 60vw, 0"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-10">
                <StatisticsDashboard skills={skills} />

                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#003E1F] py-10 sm:py-14">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        Latest from the blog
                      </h3>
                      <Link
                        href="/blog"
                        className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#003E1F] transition hover:bg-white/90"
                      >
                        See all
                      </Link>
                    </div>

                    {featuredPosts.length > 0 ? (
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {featuredPosts.map((post) => (
                          <BlogPostCard key={post.slug} post={post} />
                        ))}
                      </div>
                    ) : (
                      <p className="mt-4 text-sm sm:text-base text-white/90">
                        No blog posts yet.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Skills & Statistics Dashboard */}
        <div className="lg:hidden mb-10 sm:mb-12 px-4">
          <StatisticsDashboard skills={skills} />
        </div>

        <div className="lg:hidden relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#003E1F] py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Latest from the blog
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#003E1F] transition hover:bg-white/90"
              >
                See all
              </Link>
            </div>

            {featuredPosts.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {featuredPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm sm:text-base text-white/90">
                No blog posts yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
