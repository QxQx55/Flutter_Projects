// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Dynamic Typewriter Effect ---
const typeWords = ['HTML & CSS.', 'JavaScript.', 'React.', 'Flutter.', 'Python.', 'Java.', 'SQL.', 'C++.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function type() {
    if (!typewriterEl) return;
    
    const currentWord = typeWords[wordIndex];
    
    if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typeWords.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typewriterEl) setTimeout(type, 1000);
});

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// --- Dynamic Projects Engine (100+ Projects) ---

// 1. Data Generators
const adjectives = ['Enterprise', 'Scalable', 'NextGen', 'Real-time', 'Automated', 'Smart', 'Cross-platform', 'Dynamic', 'Secure', 'Optimized', 'Interactive', 'Global', 'Neural', 'High-Frequency', 'Cloud-Native'];
const nouns = ['System', 'Dashboard', 'API', 'App', 'Framework', 'Engine', 'Database', 'Tracker', 'Platform', 'Simulator', 'Analyzer', 'Visualizer', 'Marketplace', 'Network', 'Gateway'];
const techStacks = [
    { category: 'web', tools: 'React • JavaScript • CSS3', bg: 'linear-gradient(45deg, #1572B6, #F7DF1E)' },
    { category: 'web', tools: 'HTML5 • CSS3 • Vanilla JS', bg: 'linear-gradient(45deg, #E34F26, #1572B6)' },
    { category: 'mobile', tools: 'Flutter • Dart', bg: 'linear-gradient(45deg, #02569B, #61DAFB)' },
    { category: 'mobile', tools: 'Flutter • Firebase', bg: 'linear-gradient(45deg, #FFCA28, #02569B)' },
    { category: 'system', tools: 'Python • Django • SQL', bg: 'linear-gradient(45deg, #3776AB, #336791)' },
    { category: 'system', tools: 'Java • Spring Boot', bg: 'linear-gradient(45deg, #f89820, #E34F26)' },
    { category: 'system', tools: 'C++ • low-latency algorithms', bg: 'linear-gradient(45deg, #00599C, #336791)' },
    { category: 'system', tools: 'Python • Machine Learning', bg: 'linear-gradient(45deg, #3776AB, #FFD43B)' }
];

const projectsData = [];

// Manually pin Top 4 specific projects
projectsData.push({
    title: 'Enterprise Inventory System 1',
    desc: 'A robust, scalable backend inventory management system processing thousands of queries efficiently with heavy SQL optimization.',
    tech: 'Python • Java • SQL',
    category: 'system',
    bg: '#1e293b'
});
projectsData.push({
    title: 'EthioDelivery App 2',
    desc: 'A beautiful, cross-platform mobile application providing seamless delivery tracking and real-time vendor updates.',
    tech: 'Flutter • Firebase',
    category: 'mobile',
    bg: 'linear-gradient(45deg, #02569B, #61DAFB)'
});
projectsData.push({
    title: 'NextGen Dashboard UI 3',
    desc: 'A stunning, glassmorphism-inspired analytics dashboard built with React components and dynamic data visualization.',
    tech: 'React • JavaScript • CSS3',
    category: 'web',
    bg: 'linear-gradient(45deg, #1572B6, #F7DF1E)'
});
projectsData.push({
    title: 'High-Frequency Execution Engine 4',
    desc: 'An ultra-low latency command execution engine leveraging advanced C++ data structures and dynamic algorithms.',
    tech: 'C++ • Algorithms',
    category: 'system',
    bg: 'linear-gradient(45deg, #00599C, #336791)'
});

// Generate remaining 96 to reach 100 specific projects dynamically
for (let i = 5; i <= 100; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const stack = techStacks[Math.floor(Math.random() * techStacks.length)];
    
    projectsData.push({
        title: `${adj} ${noun} ${i}`,
        desc: `A highly scalable, performant software solution developed to optimize workflows and provide seamless interactions. Engineered using modern best practices.`,
        tech: stack.tools,
        category: stack.category,
        bg: stack.bg
    });
}

// 2. Render Functions
const galleryContainer = document.getElementById('dynamic-gallery');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filterValue) {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = ''; // Clear current

    // Filter projects based on the selected category
    const filteredProjects = projectsData.filter(project => {
        if (filterValue === 'all') return true;
        return project.category === filterValue;
    });

    // Create HTML for each project using map and join for fast loading
    const cardsHtml = filteredProjects.map((p, index) => {
        // Add a subtle cascading animation delay for the first batch of cards
        const delay = (index < 12) ? `style="animation-delay: ${index * 0.05}s"` : '';
        
        return `
        <div class="project-card fade-in-up" ${delay} data-category="${p.category}">
            <div class="project-image-container" style="background: ${p.bg};">
                <div class="project-overlay">
                    <a href="#" class="project-link" title="Live Demo"><i data-lucide="external-link"></i></a>
                    <a href="#" class="project-link" title="View Source"><i data-lucide="github"></i></a>
                </div>
            </div>
            <div class="project-info">
                <div class="project-tech">${p.tech}</div>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-desc">${p.desc}</p>
            </div>
        </div>
        `;
    }).join('');

    galleryContainer.innerHTML = cardsHtml;
    // Re-initialize Lucide icons for the dynamically injected HTML
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Ensure fade-in-up CSS exists for smooth gallery loading
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .fade-in-up {
    animation: fadeInUp 0.5s ease-out backwards;
  }
`;
document.head.appendChild(styleSheet);


// 3. Event Listeners for Filters
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Add a small exit transition
        galleryContainer.style.opacity = '0';
        galleryContainer.style.transform = 'scale(0.98)';
        
        // Wait for fade out, re-render, then fade back in
        setTimeout(() => {
            renderProjects(filterValue);
            galleryContainer.style.opacity = '1';
            galleryContainer.style.transform = 'scale(1)';
        }, 300);
    });
});

// Initialize first render on load
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS transition to gallery container
    if (galleryContainer) {
        galleryContainer.style.transition = 'all 0.3s ease-out';
        renderProjects('all');
    }
});
