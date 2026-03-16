export interface ProjectPreview {
  title: string
  image: string
  tech: string[]
  description: string
  link?: string
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
    title: "Blackjack Game",
    image: "/blackjack.png",
    tech: ["Java", "Spring Boot", "REST API"],
    description: "Interactive Blackjack game with web interface. Play directly in your browser! Features card dealing, player betting, and game logic with proper error handling. Converted from console to web application using Spring Boot.",
    link: "https://github.com/tobiasrogerhammer/blackjack-java",
  },
]
