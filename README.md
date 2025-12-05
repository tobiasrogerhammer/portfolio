# Modern Portfolio Website

A beautiful, modern portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Beautiful UI components with shadcn/ui
- 📱 Fully responsive across all devices
- 🎯 SEO optimized with proper meta tags
- 🌙 Dark/light mode support
- ✨ Smooth animations and transitions
- 📧 Contact form functionality
- 🚀 Fast loading and optimized performance

## Sections

- **Hero**: Eye-catching introduction with call-to-action
- **About**: Personal story and skills showcase
- **Projects**: Filterable project gallery with live demos
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher (required for Next.js 15)
- npm or yarn

**Note**: If you're using Node.js 18.17.0 or earlier, you'll need to update to Node.js 18.18.0 or later. You can use nvm to manage Node.js versions:

```bash
# Install nvm if you haven't already
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 18.18.0
nvm install 18.18.0
nvm use 18.18.0
```

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://192.168.100.26:3000](http://192.168.100.26:3000) in your browser.

## Customization

### Personal Information

1. **Update your name and title** in `src/components/hero.tsx`
2. **Modify the about section** in `src/components/about.tsx`
3. **Add your projects** in `src/components/projects.tsx`
4. **Update contact information** in `src/components/contact.tsx`
5. **Change social links** throughout the components

### Styling

- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### SEO

- Update metadata in `src/app/layout.tsx`
- Add your own Open Graph images
- Update social media links

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono

## Included Projects

### Blackjack Java Game

A Spring Boot web application located in the `blackjack-java/` directory. This interactive Blackjack game features:

- REST API backend with Spring Boot
- Web interface with HTML/CSS/JavaScript
- Card dealing and game logic
- Player betting system

To run the Java project locally:

```bash
cd blackjack-java
./mvnw spring-boot:run
```

The game will be available at `http://localhost:8080/`

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── navigation.tsx
│   │   └── projects.tsx
│   └── lib/
│       └── utils.ts
├── blackjack-java/
│   ├── pom.xml
│   ├── mvnw
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   ├── README.md
│   ├── Dockerfile
│   └── render.yaml
└── public/
    └── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
