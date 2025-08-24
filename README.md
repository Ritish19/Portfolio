# Ritish Neupane - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a clean sky blue design.

## 🌟 Live Website

**🌐 Main Site**: [ritish.com.np](https://ritish.com.np)  
**📱 GitHub Pages**: [username.github.io/portfolio](https://username.github.io/portfolio)

## 🎨 Design Features

- **Sky Blue Theme**: Clean, professional aesthetic with calming colors
- **Animated Elements**: Floating bubbles and smooth transitions
- **Interactive Background**: Mouse-tracking animations
- **Smooth Scrolling**: Natural page navigation without forced snapping
- **Responsive Design**: Optimized for all screen sizes
- **Personal Content**: Detailed about section with real photos and descriptions

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Custom Fonts** - Acumin Variable Concept for typography

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Portfolio website"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/
│   ├── fonts/           # Acumin Variable Concept font files
│   └── images/
│       ├── fragments/   # SVG fragment files for animations
│       ├── dots.svg     # Background dots pattern
│       ├── logo-main.svg # Main logo
│       └── logo-main.png # Main logo (PNG fallback)
├── components/
│   ├── HeroSection.tsx  # Main hero section with animations
│   └── layout/
│       ├── AnimatedNavigation.tsx # Scroll-triggered navigation
│       └── Layout.tsx   # Main layout wrapper
├── pages/
│   └── HomePage.tsx     # Main page with snap sections
└── index.css           # Global styles and animations
```

## 🎯 Key Components

### HeroSection
- Floating fragment animations
- Glassmorphism background effects
- Glitch text animations
- Interactive navigation menu

### AnimatedNavigation
- Scroll-triggered top navigation bar
- Smooth transitions between states

### Page Snapping
- Automatic section snapping
- Keyboard navigation support
- Smooth scroll behavior

## 🎨 Customization

### Colors
The cyberpunk color palette is defined in `tailwind.config.js`:
- Primary: Various shades of blue/cyan
- Secondary: Accent colors for highlights
- Custom gradients and effects

### Animations
All custom animations are defined in `src/index.css`:
- Glitch effects
- Fragment floating animations
- Background gradient movements

### Fonts
The project uses Acumin Variable Concept font:
- Font files are located in `src/assets/fonts/`
- Configured in `src/index.css` with @font-face

## 📱 Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Performance Optimized**: Efficient animations and image loading
- **Accessibility**: Proper semantic markup and keyboard navigation
- **SEO Ready**: Meta tags and structured content

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Ritish Neupane**
- Portfolio: [Your Portfolio URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using React, TypeScript, and modern web technologies.
    ...reactDom.configs.recommended.rules,
  },
})
```
