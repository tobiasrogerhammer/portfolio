import Image from "next/image"
import Link from "next/link"

export type BlogPostCardPost = {
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  imageUrl?: string | null
}

function formatDate(date?: string) {
  if (!date) return null
  return new Date(date).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export const BlogPostCard = ({ post }: { post: BlogPostCardPost }) => (
  <Link
    href={`/blog/${post.slug}`}
    aria-label={`Read article: ${post.title}`}
    className="group block overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
  >
    {post.imageUrl ? (
      <div className="relative aspect-[21/9] w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
        />
        {post.publishedAt ? (
          <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
            {formatDate(post.publishedAt)}
          </span>
        ) : null}
      </div>
    ) : null}

    <div className="bg-white p-3">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-brand-primary">
          {post.title}
        </h4>
        <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#003E1F] whitespace-nowrap group-hover:text-[#002814]">
          Read more
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
      {post.excerpt ? (
        <p className="mt-1 text-xs leading-snug text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>
      ) : null}
    </div>
  </Link>
)
