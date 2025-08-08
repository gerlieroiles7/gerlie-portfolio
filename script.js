// Portfolio JavaScript



// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.querySelector('button[onclick="toggleTheme()"]');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<img src="./images/moon_icon.png" alt="" class="w-6 group-hover:rotate-12 transition-transform duration-300">';
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<img src="./images/sun_icon.png" alt="" class="w-6 group-hover:rotate-12 transition-transform duration-300">';
    }
}

// Menu functionality
function openMenu(){
    document.getElementById('sideMenu').classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeMenu(){
    document.getElementById('sideMenu').classList.add('translate-x-full');
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Project modal functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalContainer = modal.querySelector('div');
    const project = projectData[projectId];
    
    if (project) {
        modalContent.innerHTML = `
            <div class="space-y-6">
                <!-- Project Header -->
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">${project.title}</h2>
                    <p class="text-primary-600 dark:text-primary-400 font-medium">${project.category}</p>
                </div>

                <!-- Project Image -->
                <div class="relative rounded-xl overflow-hidden shadow-lg">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-80 object-cover object-top">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <!-- Project Description -->
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Project Overview</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${project.description}</p>
                </div>

                <!-- Technologies Used -->
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `
                            <span class="px-3 py-1 bg-gradient-to-r from-primary-500 to-orange-500 text-white rounded-full text-sm font-medium">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Key Features -->
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Key Features</h3>
                    <ul class="space-y-2">
                        ${project.features.map(feature => `
                            <li class="flex items-center text-gray-600 dark:text-gray-300">
                                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Challenges & Solutions -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Challenges</h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${project.challenges}</p>
                    </div>
                    <div class="space-y-4">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Solutions</h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${project.solutions}</p>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 pt-6">
                    ${project.githubUrl === '#' ? 
                        `<button onclick="openFigmaModal('${project.liveUrl}')" class="w-full bg-gradient-to-r from-primary-500 to-orange-500 text-white py-3 px-6 rounded-xl text-center font-medium hover:shadow-lg transition-all duration-300 group">
                            <span class="flex items-center justify-center gap-2">
                                View Figma Prototype
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </span>
                        </button>` :
                        `<button onclick="openVideoModal('${project.liveUrl}')" class="flex-1 bg-gradient-to-r from-primary-500 to-orange-500 text-white py-3 px-6 rounded-xl text-center font-medium hover:shadow-lg transition-all duration-300 group">
                            <span class="flex items-center justify-center gap-2">
                                View Live Demo
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </span>
                        </button>
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-3 px-6 rounded-xl text-center font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group">
                            <span class="flex items-center justify-center gap-2">
                                View Code
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </span>
                        </a>`
                    }
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Add animation classes after a brief delay
        setTimeout(() => {
            modalContainer.classList.remove('scale-95', 'opacity-0');
            modalContainer.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalContainer = modal.querySelector('div');
    
    // Add closing animation
    modalContainer.classList.remove('scale-100', 'opacity-100');
    modalContainer.classList.add('scale-95', 'opacity-0');
    
    // Hide modal after animation
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Video modal functions
function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const modalContainer = modal.querySelector('div');
    const video = document.getElementById('projectVideo');
    
    video.src = videoUrl;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add animation classes after a brief delay
    setTimeout(() => {
        modalContainer.classList.remove('scale-95', 'opacity-0');
        modalContainer.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalContainer = modal.querySelector('div');
    const video = document.getElementById('projectVideo');
    
    // Add closing animation
    modalContainer.classList.remove('scale-100', 'opacity-100');
    modalContainer.classList.add('scale-95', 'opacity-0');
    
    // Pause and clear video
    video.pause();
    video.src = '';
    
    // Hide modal after animation
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Figma modal functions
function openFigmaModal(figmaUrl) {
    const modal = document.getElementById('figmaModal');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div class="bg-white dark:bg-darkCard rounded-2xl max-w-2xl w-full p-6 shadow-soft dark:shadow-soft-dark">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Figma Prototype</h3>
                    <p class="text-gray-600 dark:text-gray-300">This project has a Figma prototype available.</p>
                </div>
                <div class="flex gap-4">
                    <button onclick="this.closest('.fixed').remove(); document.body.style.overflow = 'auto';" class="flex-1 bg-gray-200 dark:bg-darkHover text-gray-700 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        Cancel
                    </button>
                    <button onclick="openFigmaInNewTab('${figmaUrl}'); this.closest('.fixed').remove(); document.body.style.overflow = 'auto';" class="flex-1 bg-gradient-to-r from-primary-500 to-orange-500 text-white py-2 px-4 rounded-lg hover:shadow-glow transition-all duration-300">
                        Open in Figma
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.style.overflow = 'hidden';
}

function openFigmaInNewTab(figmaUrl) {
    window.open(figmaUrl, '_blank');
}

function closeFigmaModal() {
    const modal = document.getElementById('figmaModal');
    modal.innerHTML = '';
    document.body.style.overflow = 'auto';
}

// Close modals on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const projectModal = document.getElementById('projectModal');
        const videoModal = document.getElementById('videoModal');
        const figmaModal = document.getElementById('figmaModal');
        
        if (!projectModal.classList.contains('hidden')) {
            closeProjectModal();
        }
        if (!videoModal.classList.contains('hidden')) {
            closeVideoModal();
        }
        if (!figmaModal.innerHTML.trim()) {
            closeFigmaModal();
        }
    }
});

// Close modals on outside click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('fixed')) {
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Funny love quotes rotation
function initializeLoveQuotes() {
    const quotes = [
        "I'm great at debugging code, terrible at debugging my love life 🤷‍♀️",
        "My GitHub has more commits than my dating app has matches 💻",
        "I can handle merge conflicts better than relationship conflicts 😅",
        "404: Love life not found. Please try again later 🔍",
        "My code runs perfectly, my dating life crashes constantly 💔",
        "I have better luck with infinite loops than with dating 🔄",
        "Relationship status: Committed... to my repositories 📚",
        "I speak fluent JavaScript, but men? That's a foreign language 🤔",
        "My love life has more bugs than my first React app 🐛",
        "Single by choice... my code's choice, not mine 😭"
    ];
    
    const quoteElement = document.getElementById('loveQuote');
    let currentQuoteIndex = 0;
    
    function rotateQuote() {
        if (quoteElement) {
            // Fade out
            quoteElement.style.opacity = '0.5';
            quoteElement.style.transform = 'translateY(-5px)';
            
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteElement.textContent = `"${quotes[currentQuoteIndex]}"`;
                
                // Fade in
                quoteElement.style.opacity = '1';
                quoteElement.style.transform = 'translateY(0)';
            }, 300);
        }
    }
    
    // Rotate quotes every 5 seconds
    setInterval(rotateQuote, 5000);
    
    // Add transition styles
    if (quoteElement) {
        quoteElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    const themeToggle = document.querySelector('button[onclick="toggleTheme()"]');
    
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        themeToggle.innerHTML = '<img src="./images/sun_icon.png" alt="" class="w-6 group-hover:rotate-12 transition-transform duration-300">';
    } else {
        html.classList.remove('dark');
        themeToggle.innerHTML = '<img src="./images/moon_icon.png" alt="" class="w-6 group-hover:rotate-12 transition-transform duration-300">';
    }
    
    // Add floating contact button for mobile
    createFloatingContactButton();
    
    // Initialize map location functionality
    initializeMapLocations();
    
    // Initialize scroll reveal animations
    initializeScrollReveal();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize love quotes rotation
    initializeLoveQuotes();
});

// Map location data
const locationData = {
    1: {
        title: "👩‍💻 Freelance Software Developer",
        subtitle: "Full-Cycle Web Development & Tech Solutions",
        period: "Jul 2025 – Present · Remote",
        description: "I collaborate with startups and international clients to deliver modern web apps, landing pages, admin dashboards, and AI-enhanced tools. I handle full-stack development, from design to deployment, and integrate third-party APIs and payment systems to support business goals.",
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Supabase", "Builder.io", "WordPress", "Stripe", "Lemon Squeezy", "GitHub", "Notion", "DigitalOcean"]
    },
    2: {
        title: "🛒 Admin-Marketing Assistant",
        subtitle: "E-Commerce & Content Support",
        period: "Mar 2025 – Jun 2025 · On-site",
        description: "Supported internal teams in maintaining Shopify and WordPress sites, running SEO-focused optimizations, and executing email marketing campaigns. Created and managed branded content using Canva and tracked ad performance via Google Ads.",
        skills: ["Shopify", "WordPress", "Google Ads", "Canva", "Klaviyo"]
    },
    3: {
        title: "☎️ Appointment Setter (Part-Time)",
        subtitle: "Client Communication & Coordination",
        period: "Jan 2025 – Mar 2025 · Remote",
        description: "Scheduled appointments and managed client communications. Maintained organized calendar systems and ensured smooth coordination between clients and service providers.",
        skills: ["Client Communication", "Lead Management", "Calendar Coordination", "Customer Service", "Organization"]
    },
    4: {
        title: "🧠 Software Developer",
        subtitle: "Enterprise Web Application Development",
        period: "Oct 2020 – Feb 2023 · Genfinity IT Solutions, Inc.",
        description: "Worked on full-stack projects for enterprise clients using Laravel, PHP, and Angular. Contributed to backend API development, UI design, debugging, and cross-environment deployments.",
        skills: ["PHP", "Laravel", "JavaScript", "Java", "UI/UX Design", "Angular", "Postman", "Responsive Web Design"]
    },
    5: {
        title: "🛠️ IT Technician Intern",
        subtitle: "Systems Support & Troubleshooting",
        period: "Jun 2018 – Jul 2018 · Focusinc Inc.",
        description: "Assisted IT staff in diagnosing hardware/software issues, supporting helpdesk tickets, and documenting system errors.",
        skills: ["Windows OS", "System Diagnostics", "Office IT Support", "Hardware Support", "Software Troubleshooting"]
    }
};

// Function to show location information
function showLocationInfo(locationId) {
    const locationInfo = document.getElementById('locationInfo');
    const data = locationData[locationId];
    
    if (!data) return;
    
    // Create the HTML content
    const content = `
        <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span class="text-2xl">${data.title.split(' ')[0]}</span>
                </div>
            </div>
            <div class="flex-1">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-0">
                        ${data.title}
                    </h3>
                    <span class="text-sm text-primary-600 font-medium bg-gradient-to-r from-primary-50 to-orange-50 dark:from-primary-900/20 dark:to-orange-900/20 px-3 py-2 rounded-full border border-primary-200/50 dark:border-primary-700/50 shadow-sm">
                        ${data.period}
                    </span>
                </div>
                <h4 class="text-lg text-gray-600 dark:text-gray-300 mb-3 font-medium">
                    ${data.subtitle}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    ${data.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${data.skills.map(skill => `
                        <span class="text-xs bg-gradient-to-r from-primary-50 to-orange-50 dark:from-primary-900/20 dark:to-orange-900/20 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full border border-primary-200/50 dark:border-primary-700/50 hover:scale-105 hover:shadow-sm transition-all duration-300 cursor-default">
                            ${skill}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Update the content
    locationInfo.innerHTML = content;
    
    // Show the panel with animation
    locationInfo.style.opacity = '1';
    locationInfo.style.transform = 'scale(1)';
    locationInfo.style.pointerEvents = 'auto';
    
    // Add active state to clicked button
    document.querySelectorAll('.location-btn').forEach(btn => {
        btn.classList.remove('ring-4', 'ring-white/50', 'ring-offset-2');
    });
    
    const clickedBtn = document.querySelector(`[onclick="showLocationInfo(${locationId})"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('ring-4', 'ring-white/50', 'ring-offset-2');
    }
}

// Function to initialize map locations
function initializeMapLocations() {
    // Show first location by default
    setTimeout(() => {
        showLocationInfo(1);
    }, 500);
}

// Create floating contact button for mobile devices
function createFloatingContactButton() {
    const floatingButton = document.createElement('a');
    floatingButton.href = '#contact';
    floatingButton.innerHTML = `
        <div class="flex items-center gap-2">
            <span class="text-sm font-semibold">Contact</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
        </div>
    `;
    floatingButton.className = `
        fixed bottom-6 right-6 z-50 
        bg-gradient-to-r from-primary-500 to-orange-500 
        text-white px-6 py-3 rounded-full 
        shadow-lg hover:shadow-xl 
        transform hover:scale-105 hover:-rotate-1 
        transition-all duration-300 
        md:hidden
        animate-bounce-gentle
    `;
    
    document.body.appendChild(floatingButton);
    
    // Show/hide based on scroll position
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 300) {
            floatingButton.style.transform = 'translateY(0)';
            floatingButton.style.opacity = '1';
        } else {
            floatingButton.style.transform = 'translateY(100px)';
            floatingButton.style.opacity = '0';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Project data
const projectData = {
    'project1': {
        title: 'E-Commerce Platform',
        category: 'Full-Stack Web Application',
        image: './images/projects/project-1.png',
        description: 'A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        features: [
            'User authentication and authorization',
            'Product catalog with search and filtering',
            'Shopping cart and checkout process',
            'Payment integration with Stripe',
            'Admin dashboard for product management',
            'Responsive design for all devices'
        ],
        challenges: 'Implementing secure payment processing while maintaining a smooth user experience across different devices and browsers.',
        solutions: 'Used Stripe for secure payment handling, implemented responsive design with Tailwind CSS, and created a robust backend API with proper error handling and validation.',
        liveUrl: './images/projects/project-1.mp4',
        githubUrl: 'https://github.com/username/ecommerce-platform'
    },
    'project2': {
        title: 'Task Management App',
        category: 'React Application',
        image: './images/projects/project-2.png',
        description: 'A collaborative task management application that helps teams organize projects, track progress, and improve productivity through intuitive task organization and real-time updates.',
        technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
        features: [
            'Real-time task collaboration',
            'Project organization and categorization',
            'Progress tracking and analytics',
            'Team member management',
            'Drag-and-drop task organization',
            'Mobile-responsive interface'
        ],
        challenges: 'Creating a real-time collaborative experience while maintaining data consistency and providing a smooth user interface for complex task management.',
        solutions: 'Leveraged Firebase for real-time data synchronization, implemented Redux for state management, and used Material-UI components for a consistent and intuitive user interface.',
        liveUrl: './images/projects/project-2.mp4',
        githubUrl: 'https://github.com/username/task-management-app'
    },
    'project3': {
        title: 'Weather Dashboard',
        category: 'Frontend Application',
        image: './images/projects/project-3.png',
        description: 'A beautiful weather dashboard that provides real-time weather information, forecasts, and interactive maps with a focus on user experience and visual appeal.',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Chart.js'],
        features: [
            'Real-time weather data',
            '5-day weather forecast',
            'Interactive weather maps',
            'Location-based weather',
            'Weather alerts and notifications',
            'Beautiful data visualizations'
        ],
        challenges: 'Integrating multiple weather APIs while creating an intuitive and visually appealing interface that works seamlessly across different devices.',
        solutions: 'Used Chart.js for data visualization, implemented responsive design principles, and created a modular architecture for easy API integration and maintenance.',
        liveUrl: './images/projects/project-3.mp4',
        githubUrl: 'https://github.com/username/weather-dashboard'
    }
};

// Initialize scroll reveal animations
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach(element => {
        observer.observe(element);
    });
}

// Contact form enhancements
function initializeContactForm() {
    const messageInput = document.getElementById('messageInput');
    const charCount = document.getElementById('charCount');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Character counter
    if (messageInput && charCount) {
        messageInput.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = `${count} characters`;
            
            // Change color based on length
            if (count > 500) {
                charCount.classList.add('text-orange-500');
                charCount.classList.remove('text-gray-500');
            } else {
                charCount.classList.remove('text-orange-500');
                charCount.classList.add('text-gray-500');
            }
        });
    }

    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = `
                <svg class="animate-spin w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span>Sending...</span>
            `;
            submitButton.disabled = true;
            
            // Submit form
            fetch(this.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                    successMessage.classList.remove('hidden');
                    contactForm.reset();
                    charCount.textContent = '0 characters';
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            })
            .finally(() => {
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
        });
    }

    // Input focus effects
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('ring-2', 'ring-primary-500/20');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('ring-2', 'ring-primary-500/20');
        });
    });
}