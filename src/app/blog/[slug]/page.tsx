import Image from 'next/image'
import Link from 'next/link'
import {PortableText} from '@portabletext/react'
import type {SanityImageSource} from '@sanity/image-url'
import type {TypedObject} from '@portabletext/types'
import {notFound} from 'next/navigation'

import {client, isSanityConfigured} from '@/sanity/client'
import {urlFor} from '@/sanity/image'
import {postBySlugQuery} from '@/sanity/queries'

type BlogPost = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  mainImage?: SanityImageSource
  body?: TypedObject[]
  author?: {
    name?: string
  }
}

type BlogPostPageProps = {
  params: Promise<{slug: string}>
}

function formatDate(date?: string) {
  if (!date) return null
  return new Date(date).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
  const {slug} = await params

  if (!isSanityConfigured) {
    notFound()
  }

  let post: BlogPost | null = null
  try {
    post = await client.fetch<BlogPost | null>(postBySlugQuery, {slug})
  } catch (error) {
    console.error(`Failed to fetch blog post for slug "${slug}":`, error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(2000).height(1100).url() : null

  return (
    <main className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <nav
          aria-label="Brødsmulesti"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="font-medium transition hover:text-brand-primary">
            Hovedsiden
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" className="font-medium transition hover:text-brand-primary">
            Blogg
          </Link>
        </nav>

        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{post.title}</h1>

          <p className="mt-3 text-sm text-muted-foreground">
            {formatDate(post.publishedAt)}
            {post.author?.name ? ` · ${post.author.name}` : ''}
          </p>

          {post.excerpt ? <p className="mt-4 text-muted-foreground">{post.excerpt}</p> : null}
        </header>

        {imageUrl ? (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
            <Image src={imageUrl} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 768px" />
          </div>
        ) : null}

        <div className="mt-8 space-y-5 text-base leading-7 text-foreground">
          <PortableText
            value={post.body ?? []}
            components={{
              block: {
                h2: ({children}) => <h2 className="mt-8 text-2xl font-semibold">{children}</h2>,
                h3: ({children}) => <h3 className="mt-6 text-xl font-semibold">{children}</h3>,
                normal: ({children}) => <p className="text-foreground/90">{children}</p>,
              },
              marks: {
                link: ({children, value}) => {
                  const href = typeof value?.href === 'string' ? value.href : '#'
                  const external = href.startsWith('http')
                  return (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-brand-primary underline underline-offset-4"
                    >
                      {children}
                    </a>
                  )
                },
              },
              list: {
                bullet: ({children}) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
                number: ({children}) => <ol className="list-decimal space-y-2 pl-6">{children}</ol>,
              },
            }}
          />
        </div>
      </article>
    </main>
  )
}
