# 🚀 AI & Data Science Portfolio

> A modern, fully responsive portfolio website for showcasing AI, Data Science, and Cyber Security projects. Built with vanilla HTML, CSS, and JavaScript featuring dark/light mode, smooth animations, and an integrated AI chatbot.

![Portfolio Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Tech Stack](#-tech-stack)
- [Sections](#-sections)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

This is a **professional portfolio website** designed specifically for AI & Data Science students and professionals. It showcases:

- **10 comprehensive sections** covering all aspects of your professional profile
- **AI-powered chatbot** for interactive visitor engagement
- **Dark/Light mode** for enhanced user experience
- **Fully responsive design** that works on all devices
- **SEO optimized** for better search engine visibility
- **Deployment ready** for GitHub Pages, Netlify, or Vercel

Perfect for students, job seekers, freelancers, and professionals looking to establish a strong online presence.

---

## ✨ Features

### 🎨 Design & User Interface
- ✅ **Modern & Professional** - Clean, tech-focused aesthetic with gradient accents
- ✅ **Fully Responsive** - Mobile-first design, optimized for all screen sizes
- ✅ **Dark/Light Mode** - Seamless theme switching with localStorage persistence
- ✅ **Smooth Animations** - AOS (Animate on Scroll) library integration
- ✅ **Interactive Elements** - Hover effects, transitions, and micro-interactions
- ✅ **Gradient Backgrounds** - Dynamic animated shapes and modern gradients

### 📱 Content Sections
1. **Hero Section** - Full-screen landing with typing animation and call-to-action buttons
2. **About Me** - Professional introduction with animated statistics counter
3. **Skills** - 6 categorized skill areas with icons (AI/ML, Data Analytics, Programming, Web Dev, Cyber Security, Cloud/Tools)
4. **Experience** - Timeline-based internship and work experience display
5. **Certifications** - Interactive certification cards with verification links
6. **Coding Profiles** - LeetCode, HackerRank, HackerEarth, CodeChef statistics and badges
7. **Projects** - Filterable project gallery with detailed modals (AI/ML, Data Science, Security, Web Dev)
8. **Achievements** - Hackathons, competitions, research papers, and open-source contributions
9. **Contact** - Functional form with validation + contact information cards
10. **Footer** - Social links and copyright information

### 🤖 AI Chatbot
- **Interactive Portfolio Assistant** - Answers questions about skills, projects, and experience
- **Quick Reply Buttons** - Pre-defined questions for easy navigation
- **Contextual Responses** - Smart responses based on user queries
- **Modern Chat UI** - Smooth animations and user-friendly interface

### ⚡ Technical Features
- ✅ **SEO Optimized** - Meta tags, OpenGraph tags, semantic HTML5
- ✅ **Fast Loading** - Optimized assets and CDN-based library loading
- ✅ **Accessible** - ARIA labels and keyboard navigation support
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Smooth Scrolling** - Native smooth scroll with active link tracking
- ✅ **Sticky Navigation** - Fixed navbar with scroll effects
- ✅ **Project Filters** - Dynamic filtering by category
- ✅ **Modal System** - Detailed project view with overlay
- ✅ **Counter Animation** - Animated statistics on scroll
- ✅ **Mobile Menu** - Hamburger navigation for mobile devices
- ✅ **Local Storage** - Theme preference persistence
- ✅ **No Build Process** - Pure HTML/CSS/JS, deploy anywhere instantly

---

## 📂 Project Structure

```
Portfolio/
├── index.html                  # Main portfolio website (ALL 10 sections)
├── README.md                   # This file (project overview & file structure)
├── GUIDE.md                    # Complete setup, customization, deployment guide
│
├── css/
│   └── style.css              # Complete stylesheet (2000+ lines)
│                              # - CSS variables for theming
│                              # - Dark/light mode styles
│                              # - Responsive layouts
│                              # - Animations & keyframes
│                              # - All section styles
│
├── js/
│   └── script.js              # All JavaScript functionality (800+ lines)
│                              # - Theme toggle
│                              # - Smooth scrolling
│                              # - Form validation
│                              # - Project filters
│                              # - Modal system
│                              # - AI Chatbot logic
│                              # - Counter animations
│
├── assets/
│   ├── resume.html            # HTML resume template (convertible to PDF)
│   ├── resume-style.css       # Resume stylesheet
│   └── resume.pdf             # PDF version (you create this)
│
└── images/
    ├── PLACEHOLDER_INFO.html  # Image requirements guide
    ├── profile.jpg            # Your professional headshot (400x400px)
    ├── favicon.png            # Browser tab icon (32x32px or 64x64px)
    ├── og-image.jpg           # Social media preview (1200x630px)
    ├── project1.jpg           # Project screenshots (800x600px)
    ├── project2.jpg
    ├── project3.jpg
    ├── project4.jpg
    ├── project5.jpg
    └── project6.jpg
```

### 📊 File Statistics

| Component | Files | Lines of Code | Size |
|-----------|-------|---------------|------|
| **HTML** | 2 | ~11,000 | ~200 KB |
| **CSS** | 2 | ~2,500 | ~50 KB |
| **JavaScript** | 1 | ~800 | ~25 KB |
| **Documentation** | 2 | ~2,000 | ~40 KB |
| **Total** | 7 | ~16,300 | ~315 KB |

*Note: Size excludes images. With optimized images, total size ~2-3 MB.*

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, Atom, etc.)
- Basic knowledge of HTML/CSS/JS (for customization)

### Installation

```bash
# Clone or download the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Open index.html in your browser
# OR
# Use a local server (optional)
# Python 3:
python -m http.server 8000

# Node.js:
npx serve

# VS Code:
# Install Live Server extension and click "Go Live"
```

### First Steps

1. **Open `index.html`** in your browser to view the portfolio
2. **Read `GUIDE.md`** for complete customization instructions
3. **Replace placeholder content** with your information:
   - Personal details (name, email, links)
   - Skills and experience
   - Projects and certifications
   - Add your images to the `images/` folder
4. **Test all features** (dark mode, filters, chatbot, forms)
5. **Deploy** to your hosting platform (see GUIDE.md)

---

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup, accessibility features
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)** - Vanilla JS, no frameworks required

### External Libraries (CDN-loaded)
- **[Font Awesome 6.5.1](https://fontawesome.com/)** - Icon library
- **[Google Fonts](https://fonts.google.com/)** - Poppins & Fira Code fonts
- **[AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)** - Scroll animations
- **[Typed.js 2.0.12](https://github.com/mattboldt/typed.js/)** - Typing animation effect

### CSS Features
- CSS Custom Properties (Variables)
- Flexbox & Grid Layouts
- CSS Animations & Keyframes
- Media Queries (Responsive Design)
- CSS Transitions
- Backdrop Filters (with Safari support via -webkit-)

### JavaScript Features
- ES6+ Syntax (Arrow Functions, Template Literals, Const/Let)
- DOM Manipulation
- Event Listeners
- Local Storage API
- Intersection Observer API
- Fetch API (ready for backend integration)

---

## 📱 Sections

### 1. Hero Section
- Full-screen landing page
- Typing animation with multiple phrases
- Call-to-action buttons (View Projects, Download Resume, Contact Me)
- Social media links
- Scroll indicator
- Animated background shapes

### 2. About Me
- Professional introduction
- Academic background
- Career objectives
- Current focus areas
- Profile image with border effects
- Animated statistics (Projects, Certifications, Problems Solved, Internships)

### 3. Skills & Expertise
**6 Categorized Skill Areas:**
- AI & Machine Learning (AI, ML, Deep Learning, NLP, Computer Vision)
- Data & Analytics (Data Science, Data Analyst, Data Engineer, GCP, SQL, BigQuery, Data Visualization)
- Programming Languages (Python, JavaScript, C/C++, Bash)
- Web Development (Frontend, Backend Basics, REST APIs, UI/UX)
- Cyber Security (Network Security, Ethical Hacking, Cryptography, Web Security, OWASP)
- Cloud & Tools (GCP, Git/GitHub, Docker, Linux)

### 4. Internships & Experience
- Timeline layout
- 3 internship cards (expandable)
- Tech stack tags
- Key responsibilities
- Achievements and outcomes

### 5. Certifications
- Grid layout (2 columns, responsive)
- 6 certification cards
- Issuing organization
- Year obtained
- Verification links

### 6. Coding Profiles
**4 Platform Cards:**
- **LeetCode** - Problems solved, rating, badges
- **HackerRank** - Star ratings, badges
- **HackerEarth** - Problems solved, rating
- **CodeChef** - Star rating, contests participated

### 7. Featured Projects
- Filterable by category (All, AI/ML, Data Science, Security, Web Dev)
- 6 project cards with images
- Project modals with detailed information
- GitHub and live demo links
- Tech stack tags

### 8. Achievements & Activities
- Hackathon wins
- Coding competitions
- Research papers
- Open-source contributions

### 9. Contact
- Contact information cards (Email, LinkedIn, GitHub, Resume download)
- Functional contact form with validation
- Real-time error messages
- Success/error feedback

### 10. AI Chatbot
- Floating chat button
- Expandable chat window
- Quick reply buttons
- Contextual responses about:
  - Skills and expertise
  - Projects
  - Experience
  - Certifications
  - Contact information

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| **Chrome** | Latest | ✅ Fully Supported |
| **Firefox** | Latest | ✅ Fully Supported |
| **Safari** | Latest | ✅ Fully Supported |
| **Edge** | Latest | ✅ Fully Supported |
| **iOS Safari** | Latest | ✅ Fully Supported |
| **Chrome Android** | Latest | ✅ Fully Supported |

### Notes:
- Safari 9+ supported via `-webkit-backdrop-filter` prefix
- IE 11 not supported (uses modern CSS features)
- All mobile browsers fully responsive

---

## 🤝 Contributing

While this is a personal portfolio template, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**.

You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- 🌐 Website: [yourwebsite.com](https://yourwebsite.com)
- 💼 LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)
- 📧 Email: your.email@example.com

---

## 🙏 Acknowledgments

- **[Font Awesome](https://fontawesome.com/)** - Beautiful icon library
- **[Google Fonts](https://fonts.google.com/)** - Poppins and Fira Code fonts
- **[AOS](https://michalsnik.github.io/aos/)** - Smooth scroll animations
- **[Typed.js](https://github.com/mattboldt/typed.js/)** - Typing animation effect
- **[Tailwind CSS](https://tailwindcss.com/)** - Color palette inspiration

---

## 📞 Support

Need help with customization or deployment?

- 📖 **Read the complete guide**: Check out `GUIDE.md`
- 🐛 **Found a bug?**: [Open an issue](https://github.com/yourusername/portfolio/issues)
- 💬 **Have questions?**: Email me at your.email@example.com
- 💼 **Connect on LinkedIn**: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)

---

## 📊 Project Status

| Feature | Status |
|---------|--------|
| HTML Structure | ✅ Complete |
| CSS Styling | ✅ Complete |
| JavaScript Functionality | ✅ Complete |
| Dark/Light Mode | ✅ Complete |
| Responsive Design | ✅ Complete |
| AI Chatbot | ✅ Complete |
| SEO Optimization | ✅ Complete |
| Documentation | ✅ Complete |
| Deployment Ready | ✅ Complete |

---

## 🎯 What Makes This Special?

✨ **No Build Process** - Pure HTML/CSS/JS, works anywhere  
🚀 **Deployment Ready** - Upload and go live in minutes  
🎨 **Modern Design** - Professional look with smooth animations  
📱 **Mobile First** - Optimized for all devices  
🤖 **AI Chatbot** - Interactive visitor engagement  
🌙 **Dark Mode** - Eye-friendly theme switching  
🔍 **SEO Optimized** - Better search engine rankings  
📝 **Well Documented** - Easy to customize  
💯 **Free & Open Source** - Use it for any purpose  

---

<div align="center">

**⭐ If you find this portfolio template helpful, please give it a star on GitHub! ⭐**

**Built with ❤️ for aspiring AI & Data Science professionals**

**Last Updated: January 2026**

[🔝 Back to Top](#-ai--data-science-portfolio)

</div>
