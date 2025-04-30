// Theme Toggle Functionality
const themeButton = document.getElementById('themeButton');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        createSolarSystem();
    } else {
        clearSolarSystem();
    }
}

// Solar System Animation
function createSolarSystem() {
    const solarSystem = document.getElementById('solarSystem');
    solarSystem.innerHTML = ''; // Clear existing elements

    // Create stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: twinkle ${2 + Math.random() * 3}s infinite;
        `;
        solarSystem.appendChild(star);
    }

    // Create planets
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter'];
    planets.forEach((planet, index) => {
        const orbit = document.createElement('div');
        const planetElement = document.createElement('div');
        
        orbit.className = 'orbit';
        planetElement.className = 'planet ' + planet;
        
        orbit.style.cssText = `
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            width: ${(index + 1) * 100}px;
            height: ${(index + 1) * 100}px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: rotate ${(index + 1) * 5}s linear infinite;
        `;
        
        planetElement.style.cssText = `
            position: absolute;
            width: ${10 + index * 2}px;
            height: ${10 + index * 2}px;
            background: ${getRandomColor()};
            border-radius: 50%;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
        `;
        
        orbit.appendChild(planetElement);
        solarSystem.appendChild(orbit);
    });
}

function clearSolarSystem() {
    const solarSystem = document.getElementById('solarSystem');
    solarSystem.innerHTML = '';
}

function getRandomColor() {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
    
    @keyframes rotate {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Profile Image Change Functionality
const profileImage = document.getElementById('profileImage');
profileImage.addEventListener('click', () => {
    // This could be expanded to allow image upload
    alert('Click to upload a new profile image');
});