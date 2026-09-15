export interface ProjectPreview {
  title: string
  image: string
  tech: string[]
  description: string
  link?: string
  /** Appended to `object-cover` (e.g. `object-left`) when wide art gets cropped in fixed aspect frames */
  imageClassName?: string
}

export const featuredProjects: ProjectPreview[] = [
  {
    title: "Renow AS",
    image: "https://s0.wp.com/mshots/v1/https://renow.no?w=900&h=600",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    description: "Co-founded Renow AS, a web development company specializing in creating websites that drive growth for small and medium-sized businesses. Focus on sustainable web development with 88% reduced CO2 emissions and modern technologies.",
    link: "https://renow.no",
  },
  {
    title: "Discgolf App",
    image: "/dg-thumbnail.png",
    tech: ["Next.js", "ConvexDB", "WebSocket"],
    description: "Discgolf scoring app for tracking your scores and stats in real time. Built with Next.js and ConvexDB with WebSocket support—explore new courses, log your rounds, and challenge your friends. Perfect for keeping your game history in one place.",
    link: "https://discgolf-beta.vercel.app/",
  },
  {
    title: "Say Something",
    image: "https://huddly-saysomething.vercel.app/og.png",
    imageClassName: "object-left",
    tech: ["Next.js", "TypeScript", "React"],
    description: "Conversation icebreaker web app: spin the wheel for your next topic, tune depth from small talk to meaningful, optional safe mode, and custom tags—built for better team and social moments.",
    link: "https://huddly-saysomething.vercel.app/",
  },
]
