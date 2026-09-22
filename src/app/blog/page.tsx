import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeft} from 'lucide-react'
import type {Metadata} from 'next'
import type {SanityImageSource} from '@sanity/image-url'

import {BlogPostCard} from '@/components/features/blog-post-card'
import {client, isSanityConfigured} from '@/sanity/client'
import {urlFor} from '@/sanity/image'
import {allPostsQuery} from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts about me and my interests .',
  openGraph: {
    title: 'Blog',
    description: 'Blog posts about me and my interests.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Blog',
    description: 'Blog posts about me and my interests.',
  },
}

type BlogPostListItem = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  mainImage?: SanityImageSource
}

function formatDate(date?: string) {
  if (!date) return null
  return new Date(date).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  let posts: BlogPostListItem[] = []
  let loadError = false
  if (isSanityConfigured) {
    try {
      posts = await client.fetch<BlogPostListItem[]>(allPostsQuery)
    } catch (error) {
      loadError = true
      console.error('Failed to fetch blog posts:', error)
    }
  }

  return (
    <main className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Tilbake til hovedsiden
        </Link>

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-muted-foreground">
            Artikler skrevet og publisert via Sanity.
          </p>
        </header>

        {loadError ? (
          <p className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            Kunne ikke laste blogginnlegg akkurat nå. Prøv igjen om litt.
          </p>
        ) : posts.length === 0 ? (
          <p className="rounded-lg border border-border bg-card p-6 text-card-foreground">
            Ingen innlegg ennå.
          </p>
        ) : (
          <>
          <div className="grid gap-4 lg:hidden">
            {posts.map((post) => (
              <BlogPostCard
                key={post._id}
                post={{
                  title: post.title,
                  slug: post.slug,
                  excerpt: post.excerpt,
                  publishedAt: post.publishedAt,
                  imageUrl: post.mainImage
                    ? urlFor(post.mainImage).width(1200).height(675).url()
                    : null,
                }}
              />
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            {posts.map((post) => {
              const imageUrl = post.mainImage
                ? urlFor(post.mainImage).width(1600).height(900).url()
                : null

              return (
                <article key={post._id} className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
                  {imageUrl ? (
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 512px"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-card-foreground sm:text-2xl">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    {post.publishedAt ? (
                      <p className="mt-1 text-sm text-muted-foreground">{formatDate(post.publishedAt)}</p>
                    ) : null}

                    {post.excerpt ? (
                      <p className="mt-3 line-clamp-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    ) : null}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-auto pt-4 inline-block font-medium text-brand-primary hover:underline"
                    >
                      Les mer
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
          </>
        )}
      </div>
    </main>
  )
}
