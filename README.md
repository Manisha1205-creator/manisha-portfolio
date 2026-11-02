# Manisha Pandey — Personal Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.15-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An exceptional, premium, production-ready developer portfolio website crafted for **Manisha Pandey**, a Computer Science Engineering student and aspiring software developer participating in a portfolio-building competition.

Built with a futuristic hybrid aesthetic: deep midnight navy/charcoal backgrounds, electric cyan and purple glowing accents, selective glassmorphism, responsive micro-interactions, an interactive Command Palette (`Ctrl+K`), and verified academic achievements.

---

## 🌟 Key Highlights & Features

- **Personal Brand & Philosophy**: Clear, confident, and professional presentation highlighting core problem-solving mindset, continuous learning, and practical application development.
- **Hero Section**: Animated typewriter role rotator, high-tech interactive code terminal visual, status indicators, and direct CTAs.
- **About Me**: Split-screen responsive layout covering B.Tech degree coursework, problem-solving methodologies, learning philosophies, and core engineering attributes.
- **Technical Skills Matrix**: Categorized across Programming (Java, Python, C, C++), Frontend (React.js, JavaScript, HTML5, CSS3/Tailwind), Backend (Node.js, Express.js), Database (MySQL, SQL), and Tools (Git, GitHub, VS Code). Transparently distinguishes **Proficient** from **Exploring** skills without arbitrary percentages.
- **Featured Projects Showcase**:
  - **Scam Sathi**: AI-oriented cybersecurity assistant for recognizing digital scams and phishing signals (Confirmed participant in **CHAKRAVYUH 1.0** Hackathon).
  - **CS Nexus**: Full-stack educational platform built with React, Node.js, Express, and MySQL with role-based access and planned YouTube playlist integrations.
  - **Vehicle Tracking System**: Fleet management and location monitoring web application for commercial and institutional fleets.
  - **Digital Property Tax Assistant**: Citizen-centric civic-tech concept simplifying property tax guidelines and calculations.
- **Interactive Project Modal**: In-depth case studies with Problem Statements, Solution Architecture, Key Features, and Tech Stacks.
- **Achievements & Certifications**:
  - Confirmed participation in **CHAKRAVYUH 1.0 Hackathon**.
  - **Java Fundamentals** verified certificate through **Scaler Topics** with an interactive certificate modal viewer and print support.
- **Interactive Resume Suite**: In-page tabbed inspector plus full-screen resume modal with instant Print-to-PDF capability.
- **Contact & Communication**: Contact form with robust client-side validation, success feedback, confetti micro-interaction, copy-to-clipboard email utility, and social connections.
- **Command Palette (`Ctrl+K` / `⌘K`)**: Quick keyboard search across sections, projects, and skills.
- **Dual Theme System**: Seamless dark and light modes with localStorage persistence.
- **Back-to-Top Indicator**: Floating button with circular SVG scroll progress ring.
- **SEO & Performance Ready**: Includes semantic HTML5, preconnected Google Fonts (`Plus Jakarta Sans`, `Space Grotesk`, `JetBrains Mono`), Open Graph metadata, `favicon.svg`, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Technology Stack

- **Frontend Library**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom glassmorphism utilities & CSS variables
- **Icons**: Lucide React
- **Animations & Effects**: Framer Motion & Canvas Confetti
- **Typography**: Plus Jakarta Sans, Space Grotesk, JetBrains Mono

---

## 📁 Project Structure

```
Manisha_Portfolio/
├── public/
│   ├── favicon.svg          # Modern MP monogram brand icon
│   ├── robots.txt           # Search engine crawling rules
│   └── sitemap.xml          # SEO sitemap
├── src/
│   ├── assets/              # Static media & assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Fixed glassmorphic navigation with theme toggle & active spy
│   │   │   ├── Footer.jsx       # Footer with quick links, status, and copyright
│   │   │   └── CommandMenu.jsx  # Interactive Ctrl+K search palette
│   │   ├── sections/
│   │   │   ├── Hero.jsx         # Hero section with animated role typing & code terminal
│   │   │   ├── About.jsx        # Split-screen bio, education & core engineering attributes
│   │   │   ├── Skills.jsx       # Categorized skills matrix with search & filters
│   │   │   ├── Projects.jsx     # Featured projects showcase with category filters
│   │   │   ├── Journey.jsx      # Connected vertical academic & learning timeline
│   │   │   ├── Achievements.jsx # Hackathon milestones & Scaler Java certificate gallery
│   │   │   ├── Resume.jsx       # Tabbed resume preview with PDF download trigger
│   │   │   └── Contact.jsx      # Validated contact form, copy email & socials
│   │   └── ui/
│   │       ├── ProjectModal.jsx     # Deep dive case study modal
│   │       ├── CertificateModal.jsx # Authenticated certificate previewer
│   │       ├── ResumeModal.jsx      # Full-screen printable CV modal
│   │       ├── BackToTop.jsx        # Circular scroll progress indicator
│   │       └── Toast.jsx            # Notification alert toasts
│   ├── context/
│   │   └── ThemeContext.jsx # Theme provider with localStorage synchronization
│   ├── data/
│   │   └── portfolioData.js # Centralized authentic data source
│   ├── App.jsx              # Main application orchestrator
│   ├── index.css            # Tailwind directives, themes & utilities
│   └── main.jsx             # React DOM root entry
├── index.html               # Semantic HTML root with Open Graph & Twitter meta tags
├── package.json             # NPM dependencies & scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Custom design system tokens
├── vite.config.js           # Vite configuration
└── README.md                # Documentation & deployment guide
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or pnpm

### Installation

1. Clone or open the project directory:
   ```bash
   cd Manisha_Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000` to preview the site.

---

## 📦 Building for Production

To create an optimized, minified production build:

```bash
npm run build
```

The compiled assets will be generated in the `dist/` directory, ready to deploy.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)

1. Push the code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Manisha Pandey developer portfolio"
   git remote add origin https://github.com/<your-username>/manisha-portfolio.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `manisha-portfolio` repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**. Your portfolio will be live with free SSL and edge CDN!

### Deploying to Netlify

1. Connect your repository to Netlify.
2. Set Build command to: `npm run build`
3. Set Publish directory to: `dist`
4. Click **Deploy Site**.

---

## 🔒 Authenticity & Code of Ethics

All academic details, hackathon participations (**CHAKRAVYUH 1.0**), and certifications (**Scaler Topics Java Fundamentals**) accurately reflect confirmed achievements without fabricated experience, unverified claims, or artificial statistics.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
Designed and developed for **Manisha Pandey**.

