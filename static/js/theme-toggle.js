/**
 * Initialize theme on page load
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

/**
 * Set up event listeners when DOM is ready
 */
function setupEventListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Primary click handler
        themeToggle.addEventListener('click', toggleTheme);
        
        // Backup global click handler (since CSS might be blocking)
        document.addEventListener('click', function(e) {
            if (e.target.id === 'theme-toggle' || e.target.closest('#theme-toggle')) {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
            }
        });
    }
}

// Initialize theme immediately
initializeTheme();

// Set up event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', setupEventListeners);