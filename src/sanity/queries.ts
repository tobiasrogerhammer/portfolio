import {groq} from 'next-sanity'

export const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "authorName": author->name,
    "categories": categories[]->title
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    "author": author->{
      _id,
      name,
      "slug": slug.current,
      image,
      bio
    },
    "categories": categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`
