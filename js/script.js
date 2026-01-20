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
        title: 'Sentiment Analysis System',
        image: './images/project1.jpg',
        problem: 'Businesses struggle to analyze customer feedback at scale. Manual sentiment analysis is time-consuming and prone to inconsistency, making it difficult to extract actionable insights from thousands of reviews and social media comments.',
        features: [
            'Real-time sentiment classification (Positive, Negative, Neutral)',
            'Multi-language support for global reach',
            'Batch processing for analyzing large datasets',
            'Interactive dashboard for visualization',
            'API integration for seamless deployment',
            'Achieved 94% accuracy using BERT model'
        ],
        tags: ['Python', 'NLP', 'TensorFlow', 'BERT', 'Flask', 'React'],
        github: 'https://github.com/yourusername/sentiment-analysis',
        demo: '#'
    },
    2: {
        title: 'Sales Prediction Dashboard',
        image: './images/project2.jpg',
        problem: 'Sales teams need accurate forecasting to optimize inventory and resource allocation. Traditional methods lack the precision and adaptability required for dynamic market conditions.',
        features: [
            'Time-series forecasting using LSTM',
            'Interactive visualizations with Tableau',
            'Historical data analysis and trend identification',
            'What-if scenario analysis',
            'Automated report generation',
            'Real-time data integration from multiple sources'
        ],
        tags: ['Python', 'Tableau', 'SQL', 'Scikit-learn', 'LSTM', 'Pandas'],
        github: 'https://github.com/yourusername/sales-prediction',
        demo: '#'
    },
    3: {
        title: 'Network Intrusion Detection',
        image: './images/project3.jpg',
        problem: 'Organizations face increasing cyber threats with traditional rule-based detection systems unable to identify new attack patterns. Real-time threat detection is critical for network security.',
        features: [
            'Real-time network traffic monitoring',
            'ML-based anomaly detection',
            'Classification of different attack types',
            'Alert system for suspicious activities',
            'Performance optimization for high-speed networks',
            'Integration with existing security infrastructure'
        ],
        tags: ['Python', 'Machine Learning', 'Wireshark', 'Keras', 'NetworkX'],
        github: 'https://github.com/yourusername/network-ids',
        demo: '#'
    },
    4: {
        title: 'Image Classification Model',
        image: './images/project4.jpg',
        problem: 'Manual image categorization is impractical for large datasets. Automated, accurate image classification is essential for content management, e-commerce, and medical diagnostics.',
        features: [
            'Multi-class image classification',
            'Transfer learning with pre-trained models',
            'Data augmentation for improved accuracy',
            'Real-time image prediction',
            'Model fine-tuning capabilities',
            'Web interface for easy testing'
        ],
        tags: ['Python', 'CNN', 'TensorFlow', 'OpenCV', 'Flask'],
        github: 'https://github.com/yourusername/image-classification',
        demo: '#'
    },
    5: {
        title: 'Customer Segmentation',
        image: './images/project5.jpg',
        problem: 'Marketing teams need to understand customer behavior to create targeted campaigns. Generic approaches result in wasted resources and poor engagement rates.',
        features: [
            'K-means clustering for customer grouping',
            'RFM (Recency, Frequency, Monetary) analysis',
            'Customer lifetime value prediction',
            'Behavioral pattern identification',
            'Interactive segment visualization',
            'Actionable marketing recommendations'
        ],
        tags: ['Python', 'K-means', 'Pandas', 'Matplotlib', 'Seaborn'],
        github: 'https://github.com/yourusername/customer-segmentation',
        demo: '#'
    },
    6: {
        title: 'Real-time Chat Application',
        image: './images/project6.jpg',
        problem: 'Modern applications require instant communication capabilities. Building secure, scalable real-time chat systems presents technical challenges in handling concurrent connections and data synchronization.',
        features: [
            'Real-time messaging with WebSocket',
            'User authentication and authorization',
            'Group chat functionality',
            'Message history and search',
            'File sharing capabilities',
            'Responsive modern UI design'
        ],
        tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
        github: 'https://github.com/yourusername/chat-app',
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
    const lowerMessage = message.toLowerCase();
    
    // Skills response
    if (lowerMessage.includes('skill')) {
        return `I have expertise in multiple areas:
            <ul>
                <li><strong>AI & ML:</strong> Machine Learning, Deep Learning, NLP, Computer Vision</li>
                <li><strong>Data:</strong> Data Science, Analytics, SQL, BigQuery, Visualization</li>
                <li><strong>Programming:</strong> Python, JavaScript, C/C++</li>
                <li><strong>Security:</strong> Network Security, Ethical Hacking, Cryptography</li>
                <li><strong>Cloud:</strong> Google Cloud Platform, Docker, Linux</li>
            </ul>`;
    }
    
    // Projects response
    if (lowerMessage.includes('project')) {
        return `Here are some of my key projects:
            <ul>
                <li><strong>Sentiment Analysis System</strong> - NLP model with 94% accuracy</li>
                <li><strong>Sales Prediction Dashboard</strong> - ML-based forecasting tool</li>
                <li><strong>Network Intrusion Detection</strong> - Real-time security system</li>
                <li><strong>Image Classification</strong> - Deep learning CNN model</li>
            </ul>
            Check out the Projects section for more details!`;
    }
    
    // Certifications response
    if (lowerMessage.includes('certification') || lowerMessage.includes('certificate')) {
        return `I hold several professional certifications:
            <ul>
                <li>Google Cloud Data Analytics (2024)</li>
                <li>Certified Ethical Hacker (CEH) - 2024</li>
                <li>Machine Learning Specialization - Stanford</li>
                <li>Data Science Professional - IBM</li>
                <li>Network Security Fundamentals - Cisco</li>
            </ul>`;
    }
    
    // Contact response
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
        return `You can reach me through:
            <ul>
                <li><strong>Email:</strong> aryanlodha0908@example.com</li>
                <li><strong>LinkedIn:</strong> linkedin.com/in/aryan-lodha-9525a4355/</li>
                <li><strong>GitHub:</strong> github.com/aryanlodha0908</li>
            </ul>
            Or use the contact form on this page!`;
    }
    
    // Experience response
    if (lowerMessage.includes('experience') || lowerMessage.includes('internship')) {
        return `I have completed multiple internships:
            <ul>
                <li><strong>Data Analyst Intern</strong> - Improved reporting efficiency by 35%</li>
                <li><strong>ML Intern</strong> - Achieved 92% model accuracy</li>
                <li><strong>Cyber Security Intern</strong> - Identified 15+ critical vulnerabilities</li>
            </ul>
            Visit the Experience section for full details!`;
    }
    
    // Education response
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study')) {
        return `I'm currently pursuing a degree in <strong>Artificial Intelligence & Data Science</strong> with Honors in <strong>Cyber Security</strong>. My academic focus includes machine learning, data analytics, and security principles.`;
    }
    
    // Resume response
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
        return `You can download my resume by clicking the "Download Resume" button in the hero section or contact section. It includes detailed information about my education, experience, skills, and projects.`;
    }
    
    // Coding profiles response
    if (lowerMessage.includes('leetcode') || lowerMessage.includes('coding') || lowerMessage.includes('competitive')) {
        return `I'm active on several coding platforms:
            <ul>
                <li><strong>LeetCode:</strong> 500+ problems solved, Knight rating</li>
                <li><strong>HackerRank:</strong> 5-star in Problem Solving & Python</li>
                <li><strong>HackerEarth:</strong> 300+ problems, 1500+ rating</li>
                <li><strong>CodeChef:</strong> 3-star rating</li>
            </ul>`;
    }
    
    // Default response
    return `Thanks for your message! I can help you with information about:
        <ul>
            <li>My skills and expertise</li>
            <li>Projects and work</li>
            <li>Certifications</li>
            <li>Experience and internships</li>
            <li>Contact information</li>
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
