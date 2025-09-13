// OWASP Training Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Activity filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activityCards = document.querySelectorAll('.activity-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter activities
            activityCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    card.classList.add('fade-in-up');
                } else {
                    const difficulty = card.getAttribute('data-difficulty');
                    if (difficulty === filter) {
                        card.style.display = 'block';
                        card.classList.add('fade-in-up');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in-up');
                    }
                }
            });
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    const cards = document.querySelectorAll('.activity-card, .setup-card, .slide-card, .resource-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-opacity-95');
            navbar.classList.add('backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-opacity-95');
            navbar.classList.remove('backdrop-blur-sm');
        }
    });

    // Copy code functionality
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const code = this.textContent;
            navigator.clipboard.writeText(code).then(function() {
                // Show feedback
                const originalText = block.textContent;
                block.textContent = 'Copied!';
                block.classList.add('bg-green-800');
                
                setTimeout(() => {
                    block.textContent = originalText;
                    block.classList.remove('bg-green-800');
                }, 1000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
            });
        });
        
        // Add cursor pointer to indicate clickable
        block.style.cursor = 'pointer';
        block.title = 'Click to copy';
    });

    // Progress tracking
    let completedActivities = JSON.parse(localStorage.getItem('completedActivities') || '[]');
    
    function markActivityComplete(activityId) {
        if (!completedActivities.includes(activityId)) {
            completedActivities.push(activityId);
            localStorage.setItem('completedActivities', JSON.stringify(completedActivities));
            updateProgressDisplay();
        }
    }
    
    function updateProgressDisplay() {
        const totalActivities = 10;
        const completed = completedActivities.length;
        const percentage = Math.round((completed / totalActivities) * 100);
        
        // Update any progress indicators
        const progressElements = document.querySelectorAll('.progress-indicator');
        progressElements.forEach(element => {
            element.textContent = `${completed}/${totalActivities} (${percentage}%)`;
        });
    }

    // Initialize progress display
    updateProgressDisplay();

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Search functionality (if search input exists)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            activityCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Theme toggle (if theme toggle exists)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }
    }

    // Tooltip functionality
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip bg-gray-800 text-white px-2 py-1 rounded text-sm absolute z-50';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        });
    }

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });

    // Service worker registration (if available)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('Service Worker registered successfully');
        }).catch(function(error) {
            console.log('Service Worker registration failed');
        });
    }
});

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 px-4 py-2 rounded shadow-lg z-50 ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 
        'bg-blue-600'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other scripts
window.owaspTraining = {
    showNotification,
    formatTime,
    debounce
};

