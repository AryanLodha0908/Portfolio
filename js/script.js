// ============================================
// Portfolio Website JavaScript
// ============================================

// ============================================
// Initialize AOS (Animate on Scroll)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
});

// ============================================
// Theme Toggle (Dark/Light Mode)
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// Navigation - Sticky & Active Link
// ============================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

// Sticky navbar on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
    
    // Show/hide scroll to top button
    updateScrollTopButton();
});

// Update active navigation link
function updateActiveNavLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll to Top Button
// ============================================
const scrollTopBtn = document.getElementById('scroll-top');

function updateScrollTopButton() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Typing Animation (Hero Section)
// ============================================
const typingText = document.querySelector('.typing-text');
const phrases = [
    'AI & Data Science Student',
    'Machine Learning Enthusiast',
    'Data Analyst',
    'Cyber Security Specialist',
    'Full Stack Developer',
    'Problem Solver'
];

if (typingText) {
    new Typed('.typing-text', {
        strings: phrases,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// ============================================
// Counter Animation (Stats)
// ============================================
const counters = document.querySelectorAll('[data-count]');
let counterAnimated = false;

function animateCounters() {
    if (counterAnimated) return;
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
    
    counterAnimated = true;
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// ============================================
// Project Filters
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Re-trigger AOS animation
                card.classList.add('aos-animate');
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ============================================
// Project Modal
// ============================================
const projectModal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');
const viewDetailsButtons = document.querySelectorAll('.btn-view-details');

// Project data
const projectsData = {
    1: {
        title: 'AutoMind AI Deployment Engine',
        image: './images/project1.jpg',
        problem: 'Deploying machine learning models to production is inherently complex, time-consuming, and often requires a dedicated DevOps team. Most data scientists struggle to transition their models from Jupyter notebooks into robust, scalable production APIs, leading to significant delays in software delivery and operational bottlenecks.',
        features: [
            'Fully automated end-to-end ML deployment pipeline',
            'Transforms raw datasets and trained models into production-ready APIs instantly',
            'Automated model training, evaluation, and hyperparameter tuning',
            'Built-in performance monitoring, logging, and dynamic auto-scaling',
            'Containerized architecture for seamless cloud deployment'
        ],
        tags: ['Python', 'Machine Learning', 'Automation', 'API', 'Docker', 'FastAPI'],
        github: '#',
        demo: '#'
    },
    2: {
        title: 'Autonomous Cyber Defense AI Agent',
        image: './images/project2.jpg',
        problem: 'Traditional, rule-based security systems struggle to respond quickly to novel, zero-day attacks, often requiring tedious human intervention. The escalating sophistication of cyber threats necessitates an intelligent, self-healing network defense mechanism that can operate at machine speed.',
        features: [
            'Multi-Agent AI architecture for distributed threat intelligence',
            'Real-time anomaly detection and proactive incident response',
            'Automated vulnerability mitigation and network isolation',
            'Behavioral analysis engine to identify zero-day threats',
            'Comprehensive security dashboard with live attack vector visualization'
        ],
        tags: ['AI', 'Cyber Security', 'Multi-Agent', 'Python', 'NetworkX'],
        github: '#',
        demo: '#'
    },
    3: {
        title: 'Renewable Energy Optimization Platform',
        image: './images/project3.jpg',
        problem: 'Optimizing the placement and efficiency of renewable energy installations (like solar and wind farms) requires analyzing vast amounts of geographic, climatic, and topological data. Without intelligent analysis, renewable projects often suffer from sub-optimal placement and reduced energy yields.',
        features: [
            'National-scale AI decision-making for optimal site selection',
            'Deep analysis of geography, climate, weather patterns, and terrain',
            'Predictive modeling for long-term energy output forecasting',
            'Interactive data visualizations and heatmap generation',
            'Integration with real-time meteorological APIs'
        ],
        tags: ['AI', 'Data Science', 'Analysis', 'Python', 'Pandas', 'Folium'],
        github: '#',
        demo: '#'
    },
    4: {
        title: 'Smart Sign Language Interpreter',
        image: './images/project4.jpg',
        problem: 'Significant communication barriers exist between sign language users and non-signers in everyday interactions. A fast, highly accurate, and accessible real-time translation tool is needed to bridge this gap without relying on human interpreters.',
        features: [
            'Real-time hand and body gesture recognition via webcam',
            'Deep Learning based skeletal pose estimation and tracking',
            'High accuracy continuous translation of complex sign sentences',
            'Intuitive user interface with text-to-speech capabilities',
            'Optimized for low-latency edge computing devices'
        ],
        tags: ['Computer Vision', 'Deep Learning', 'OpenCV', 'AI', 'TensorFlow'],
        github: '#',
        demo: '#'
    },
    5: {
        title: 'Smart Virtual Cursor',
        image: './images/project5.jpg',
        problem: 'Physical interaction devices (mice, trackpads) limit accessibility for users with motor disabilities and can cause ergonomic issues during long computer sessions. A touchless, hardware-free navigation solution is highly desirable.',
        features: [
            'Robust hand gesture recognition utilizing standard webcams',
            'Real-time, smooth cursor control entirely without hardware',
            'Support for complex gestures: click, double-click, drag, and scroll',
            'Low latency processing engineered with OpenCV and MediaPipe',
            'Customizable sensitivity and gesture mapping profiles'
        ],
        tags: ['Computer Vision', 'AI', 'Gesture Recognition', 'OpenCV', 'MediaPipe'],
        github: '#',
        demo: '#'
    },
    6: {
        title: 'TruthShield AI',
        image: './images/project6.jpg',
        problem: 'The exponential rise of hyper-realistic fake news and AI-generated deepfakes makes it increasingly difficult for users, journalists, and platforms to trust online media. Misinformation spreads rapidly, requiring automated, scalable detection mechanisms.',
        features: [
            'Multi-modal Deepfake detection (analyzing both video frames and audio)',
            'Fake news text classification via state-of-the-art NLP models (BERT)',
            'High-speed, production-ready API built with FastAPI',
            'Pre-trained ensemble models for robust image and video authenticity analysis',
            'Browser extension integration for real-time content flagging'
        ],
        tags: ['NLP', 'Deep Learning', 'FastAPI', 'Security', 'PyTorch'],
        github: '#',
        demo: '#'
    },
    7: {
        title: 'LLM DevOps Orchestrator Suite',
        image: './images/project1.jpg',
        problem: 'Managing, testing, and orchestrating multiple Large Language Models (LLMs) for complex software engineering tasks is inefficient. Developers face issues with model routing, cost management, prompt versioning, and hallucination mitigation.',
        features: [
            'Intelligent Multi-LLM routing based on task complexity and cost',
            'Ecosystem of 14 specialized, interacting AI agents',
            'Automated cost optimization and quality assurance pipelines',
            'Deep integration with Kaggle ML for dataset retrieval',
            'Centralized logging and prompt performance analytics'
        ],
        tags: ['LLM', 'DevOps', 'Multi-Agent', 'GenAI', 'Python'],
        github: '#',
        demo: '#'
    },
    8: {
        title: 'Project Validation & Intelligence Audit Engine',
        image: './images/project2.jpg',
        problem: 'Ensuring that software projects are production-ready requires tedious, manual auditing. Code reviews, security vulnerability scanning, and performance testing are often fragmented across different tools, slowing down the release cycle.',
        features: [
            'Comprehensive 10-Phase System Validation Architecture',
            'Deep code, security, and performance testing orchestration',
            'Automated generation of detailed portfolio and audit reports',
            'Metrics validation and architectural visualization generation',
            'CI/CD pipeline integration for continuous auditing'
        ],
        tags: ['Validation', 'Audit', 'Python', 'Testing', 'CI/CD'],
        github: '#',
        demo: '#'
    },
    9: {
        title: 'Smart User Behavior Insights System',
        image: './images/project3.jpg',
        problem: 'Understanding deep user engagement metrics and predicting bounce rates usually requires complex, expensive, and heavy third-party analytics tools that compromise user privacy and slow down website load times.',
        features: [
            'Lightweight, real-time user tracking and interaction metrics',
            'AI-powered bounce prediction and session length forecasting',
            'Interactive, visually rich analytics dashboard for administrators',
            'Secure REST API and robust Admin panel control',
            'Privacy-first architecture with anonymized data processing'
        ],
        tags: ['Node.js', 'Express', 'React', 'Analytics', 'MongoDB'],
        github: '#',
        demo: '#'
    },
    10: {
        title: 'CreatorOS AI',
        image: './images/project4.jpg',
        problem: 'Content creators need an integrated platform to manage their business, audience, and monetization. Building a custom, secure, and scalable platform from scratch is technologically daunting and time-consuming.',
        features: [
            'Modern full-stack architecture optimized for high traffic',
            'Enterprise-grade secure authentication implemented with Clerk',
            'Robust relational database management orchestrated with Prisma',
            'Responsive, accessible, and beautiful UI built with Tailwind CSS',
            'Integrated AI tools for content ideation and scheduling'
        ],
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'Clerk'],
        github: '#',
        demo: '#'
    },
    11: {
        title: 'JamSphere Live Jamming Music Arena',
        image: './images/project5.jpg',
        problem: 'Local musicians frequently struggle to find compatible partners with similar musical tastes and skill levels for casual jamming or band formation. Existing social networks are not optimized for real-life musical matchmaking.',
        features: [
            'AI-powered music taste and skill-level matching algorithm',
            'Location-based discovery to find nearby musicians',
            'Interactive maps integration for venue and studio finding',
            'Secure meeting facilitation and chat scheduling',
            'Audio portfolio hosting for user profiles'
        ],
        tags: ['AI', 'Maps API', 'Web', 'Music', 'React'],
        github: '#',
        demo: '#'
    },
    12: {
        title: 'AI Document Intelligence Suite',
        image: './images/project6.jpg',
        problem: 'Extracting meaningful semantic information from unstructured documents (invoices, contracts, PDFs) is a massive bottleneck for enterprise workflows. Traditional OCR is too rigid and fails to understand context.',
        features: [
            'Fully automated, scalable document processing pipeline',
            'Advanced OCR paired with intelligent text extraction',
            'Semantic analysis using NLP to understand document context and intent',
            'Automated data structuring and export to databases (JSON/CSV)',
            'Support for multi-page, multi-format (PDF, Image, Word) documents'
        ],
        tags: ['Python', 'OCR', 'NLP', 'Computer Vision', 'PyTorch'],
        github: '#',
        demo: '#'
    }
};

// Open modal with project details
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            // Update modal content
            document.querySelector('.modal-title').textContent = project.title;
            document.querySelector('.modal-image img').src = project.image;
            document.querySelector('.problem-statement').textContent = project.problem;
            
            // Update features list
            const featuresList = document.querySelector('.features-list');
            featuresList.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            // Update tags
            const modalTags = document.querySelector('.modal-tags');
            modalTags.innerHTML = '';
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                modalTags.appendChild(span);
            });
            
            // Update links
            document.querySelector('.modal-github').href = project.github;
            document.querySelector('.modal-demo').href = project.demo;
            
            // Show modal
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalClose.addEventListener('click', closeModal);
projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
        closeModal();
    }
});

function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// Contact Form Validation & Submission
// ============================================
const contactForm = document.getElementById('contact-form');
const formGroups = contactForm.querySelectorAll('.form-group');

// Form validation
function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    let isValid = true;
    
    // Remove previous error
    formGroup.classList.remove('error');
    errorMessage.textContent = '';
    
    // Check if field is empty
    if (!field.value.trim()) {
        formGroup.classList.add('error');
        errorMessage.textContent = 'This field is required';
        isValid = false;
    }
    
    // Email validation
    if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            formGroup.classList.add('error');
            errorMessage.textContent = 'Please enter a valid email address';
            isValid = false;
        }
    }
    
    return isValid;
}

// Add blur event listeners to all form fields
contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', function() {
        validateField(this);
    });
});

// Form submission
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Validate all fields
    let isFormValid = true;
    this.querySelectorAll('input, textarea').forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    submitBtn.classList.add('loading');
    
    // Simulate form submission (replace with actual API call)
    try {
        // Example: Using EmailJS or similar service
        // await emailjs.send('service_id', 'template_id', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showFormMessage('success', 'Thank you! Your message has been sent successfully.');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        // Show error message
        showFormMessage('error', 'Oops! Something went wrong. Please try again later.');
    } finally {
        // Remove loading state
        submitBtn.classList.remove('loading');
    }
});

function showFormMessage(type, message) {
    const formMessage = document.querySelector('.form-message');
    formMessage.className = `form-message ${type}`;
    formMessage.textContent = message;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ============================================
// AI Chatbot
// ============================================
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMinimize = document.getElementById('chatbot-minimize');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInputField = document.getElementById('chatbot-input-field');
const chatbotSendBtn = document.getElementById('chatbot-send');
const quickReplies = document.querySelectorAll('.quick-reply');

// Toggle chatbot window
chatbotToggle.addEventListener('click', function() {
    chatbotWindow.classList.toggle('active');
    if (chatbotWindow.classList.contains('active')) {
        chatbotInputField.focus();
    }
});

// Minimize chatbot
chatbotMinimize.addEventListener('click', function() {
    chatbotWindow.classList.remove('active');
});

// Send message
chatbotSendBtn.addEventListener('click', sendMessage);
chatbotInputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Quick replies
quickReplies.forEach(button => {
    button.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        chatbotInputField.value = message;
        sendMessage();
    });
});

function sendMessage() {
    const message = chatbotInputField.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    
    // Clear input
    chatbotInputField.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addChatMessage(response, 'bot');
    }, 500);
}

function addChatMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = text;
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(message) {
    const msg = message.toLowerCase();
    
    // Course / Qualification / Major
    if (msg.match(/qualification|course|major|specialization|honors|degree|study|studying|education/)) {
        return `Aryan is pursuing a <strong>Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science</strong> with Honors in <strong>Cyber Security</strong> at K J Somaiya College of Engineering. He is expected to graduate in May 2026 with a CGPA of 8.5/10.`;
    }
    
    // College / University
    if (msg.match(/college|university|institute|school|somaiya/)) {
        return `Aryan studies at <strong>K J Somaiya College of Engineering</strong> in Mumbai.`;
    }
    
    // Location
    if (msg.match(/location|live|city|where|based|address|mumbai/)) {
        return `Aryan is based in <strong>Chittorgarh, Rajasthan, India</strong>.`;
    }
    
    // Contact
    if (msg.match(/contact|email|reach|phone|call|number|linkedin|github/)) {
        return `You can reach Aryan at:
            <ul>
                <li>📧 <strong>Email:</strong> aryanlodha0908@gmail.com</li>
                <li>📱 <strong>Phone:</strong> +91 96369 58438</li>
                <li>📍 <strong>Location:</strong> Mumbai, Maharashtra</li>
                <li>🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aryan-lodha-9525a4355/" target="_blank">Aryan Lodha</a></li>
                <li>💻 <strong>GitHub:</strong> <a href="https://github.com/aryanlodha0908" target="_blank">aryanlodha0908</a></li>
            </ul>`;
    }
    
    // Experience / Internship
    if (msg.match(/experience|intern|internship|work|job|employment/)) {
        return `Aryan recently interned in <strong>Archaeological Image Analysis</strong>.
            <ul>
                <li>Analyzed archaeological images using computer vision techniques.</li>
                <li>Developed algorithms for image enhancement and pattern recognition.</li>
                <li>Collaborated with researchers to document historical artifacts.</li>
            </ul>
            <strong>Tech Stack:</strong> Computer Vision, Image Processing, Python.`;
    }
    
    // Certifications
    if (msg.match(/certif|certificate|certification|credential|google|coursera/)) {
        return `Aryan holds several professional certifications, including:
            <ul>
                <li><strong>Coursera Specializations</strong></li>
                <li><strong>Google Skills</strong></li>
            </ul>`;
    }
    
    // Skills
    if (msg.match(/skill|skills|tech|stack|language|framework|tool|programming/)) {
        return `Aryan's technical skills include:
            <ul>
                <li><strong>AI & ML:</strong> Deep Learning, NLP, Computer Vision, TensorFlow, PyTorch</li>
                <li><strong>Data Science:</strong> SQL, BigQuery, Pandas, Tableau, Power BI</li>
                <li><strong>Web Dev:</strong> React, Node.js, Next.js, HTML/CSS</li>
                <li><strong>Cyber Security:</strong> Ethical Hacking, Cryptography, OWASP</li>
                <li><strong>Programming:</strong> Python, JavaScript, C/C++</li>
            </ul>`;
    }
    
    // Profiles
    if (msg.match(/leetcode|hackerrank|hackerearth|codechef|competitive|profile|coding/)) {
        return `Aryan is highly active in competitive programming:
            <ul>
                <li><strong>LeetCode:</strong> 500+ problems solved, Knight rating</li>
                <li><strong>HackerRank:</strong> 5-star Problem Solving & Python</li>
                <li><strong>HackerEarth:</strong> 300+ problems, 1500+ rating</li>
                <li><strong>CodeChef:</strong> 3-star rating</li>
            </ul>`;
    }
    
    // Achievements
    if (msg.match(/achieve|achievement|achievements|award|hackathon|paper|research|blog|open source|open-source/)) {
        return `Aryan has several notable achievements:
            <ul>
                <li>🏆 1st Place in AI Hackathon 2024</li>
                <li>🏅 Top 50 in National Level Coding Competition</li>
                <li>📄 Published research paper on "Deep Learning for Anomaly Detection" in IEEE Conference</li>
                <li>💻 Active open-source contributor with 50+ commits</li>
                <li>✍️ Technical Blog Writer (20+ articles)</li>
            </ul>`;
    }
    
    // Specific Projects Match
    if (msg.match(/music|jam|jamsphere/)) {
        return `<strong>JamSphere Live Jamming Music Arena:</strong> A sophisticated location-based, AI-powered platform designed to help musicians with similar tastes discover each other, meet in real life, and jam together. It features interactive map integrations and secure chat.`;
    }
    if (msg.match(/document|ocr|extract/)) {
        return `<strong>AI Document Intelligence Suite:</strong> A highly comprehensive AI system engineered for automated document processing. It leverages advanced OCR and NLP to not just extract text, but to intelligently perform semantic analysis on unstructured enterprise documents.`;
    }
    if (msg.match(/deploy|automind/)) {
        return `<strong>AutoMind AI Deployment Engine:</strong> A fully automated, end-to-end machine learning deployment system. It completely eliminates DevOps bottlenecks by automatically transforming raw datasets and Jupyter notebooks into scalable, production-ready APIs.`;
    }
    if (msg.match(/cyber|defense|agent|security/)) {
        return `<strong>Autonomous Cyber Defense AI Agent:</strong> A state-of-the-art Multi-Agent AI-Powered Security Operations Platform. It provides real-time anomaly detection, zero-day threat analysis, and automated self-healing network defense.`;
    }
    if (msg.match(/llm|devops|orchestrator/)) {
        return `<strong>LLM DevOps Orchestrator Suite:</strong> An autonomous AI software engineering platform featuring an ecosystem of 14 specialized AI agents. It intelligently routes tasks between multiple LLMs to optimize for cost, speed, and code quality.`;
    }
    if (msg.match(/audit|valid|validation/)) {
        return `<strong>Project Validation & Intelligence Audit Engine:</strong> An elite-grade System Validator framework. It performs deep, full-stack technical, statistical, and system audits to ensure codebases are strictly production-ready.`;
    }
    if (msg.match(/energy|renew|optimize/)) {
        return `<strong>Renewable Energy Optimization Platform:</strong> A national-scale AI decision platform that extensively analyzes geography, climate, weather patterns, and terrain to optimally place and forecast the yield of renewable energy farms.`;
    }
    if (msg.match(/behavior|insight|analytic|analytics/)) {
        return `<strong>Smart User Behavior Insights System:</strong> A lightweight, production-ready web analytics platform. It uses AI to track user behavior, securely process interaction metrics, and accurately predict session bounce rates.`;
    }
    if (msg.match(/truth|fake|news|deepfake/)) {
        return `<strong>TruthShield AI:</strong> A vital AI security system utilizing advanced NLP (BERT) and Deep Learning to automatically detect and flag fake news text and hyper-realistic AI-generated deepfake media.`;
    }
    if (msg.match(/creator|creatoros|os/)) {
        return `<strong>CreatorOS AI:</strong> A beautiful, modern web application ecosystem built specifically for content creators. It utilizes Next.js, Prisma, Clerk for secure auth, and Tailwind CSS for a highly responsive interface.`;
    }
    if (msg.match(/sign|language|interpreter/)) {
        return `<strong>Smart Sign Language Interpreter:</strong> A highly accurate real-time Sign Language Recognition system. It utilizes Computer Vision, skeletal pose estimation, and Deep Learning to instantly translate complex gestures into text.`;
    }
    if (msg.match(/cursor|gesture|mouse/)) {
        return `<strong>Smart Virtual Cursor:</strong> An intelligent, hardware-free hand gesture recognition system. Utilizing OpenCV and MediaPipe, it allows users to perform clicks, drags, and scrolling seamlessly using just their webcam.`;
    }
    
    // All projects query
    if (msg.match(/project|projects|portfolio|work|build|built/)) {
        return `Aryan has 12 featured projects spanning AI, Cyber Security, Data Science, and Web Dev.
            <ol>
                <li><strong>AutoMind AI Deployment Engine</strong></li>
                <li><strong>Autonomous Cyber Defense AI Agent</strong></li>
                <li><strong>Renewable Energy Optimization Platform</strong></li>
                <li><strong>Smart Sign Language Interpreter</strong></li>
                <li><strong>Smart Virtual Cursor</strong></li>
                <li><strong>TruthShield AI</strong></li>
                <li><strong>LLM DevOps Orchestrator Suite</strong></li>
                <li><strong>Project Validation & Intelligence Audit Engine</strong></li>
                <li><strong>Smart User Behavior Insights System</strong></li>
                <li><strong>CreatorOS AI</strong></li>
                <li><strong>JamSphere Live Jamming Music Arena</strong></li>
                <li><strong>AI Document Intelligence Suite</strong></li>
            </ol>
            Ask me for details about any of them!`;
    }

    // Identity / Name
    if (msg.match(/name|who are you|who made you|who built you|about aryan|aryan/)) {
        return `I am an AI assistant representing <strong>Aryan Lodha</strong>. Aryan is an AI & Data Science Student, Data & AI Engineer, and Cyber Security Honors student based in Mumbai, Maharashtra.`;
    }

    // Greetings
    if (msg.match(/(hi|hello|hey|greetings|morning|evening|afternoon)/)) {
        return "Hi there! I'm Aryan's AI Assistant. I know all about his qualifications, projects, internship, achievements, and more. Ask me anything about him!";
    }
    
    // Default response
    return `I'm Aryan's AI Assistant. I can tell you about his:
        <ul>
            <li><strong>Education</strong> (Degree, CGPA, College)</li>
            <li><strong>Projects</strong> (Ask to list them or about specific ones)</li>
            <li><strong>Experience</strong> (Internships)</li>
            <li><strong>Skills</strong> & <strong>Achievements</strong></li>
            <li><strong>Contact Info</strong></li>
        </ul>
        What would you like to know?`;
}

// ============================================
// Performance Optimization
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Initialize Everything
// ============================================
window.addEventListener('load', function() {
    // Initial check for scroll position
    updateActiveNavLink();
    updateScrollTopButton();
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    console.log('Portfolio website loaded successfully! 🚀');
});

// ============================================
// Error Handling
// ============================================
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// ============================================
// Service Worker Registration (Optional for PWA)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}
