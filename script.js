document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;

    // Check for saved language preference
    const savedLang = localStorage.getItem('portfolio-lang') || 'en';
    body.setAttribute('data-lang', savedLang);
    updateToggleButton(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = body.getAttribute('data-lang');
        const newLang = currentLang === 'en' ? 'fr' : 'en';

        body.setAttribute('data-lang', newLang);
        localStorage.setItem('portfolio-lang', newLang);
        updateToggleButton(newLang);
    });

    function updateToggleButton(lang) {
        langToggle.textContent = lang === 'en' ? 'FR | EN' : 'EN | FR';
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});


// Orange Cyberdefense Image Slider
const orangePhotos = ["orange_photo1.jpg", "orange_photo2.jpg", "orange_photo3.jpg"];
let currentPhotoIdx = 0;

function nextOrangeImage() {
    const img = document.getElementById("orange-slider");
    const dots = document.querySelectorAll(".gallery-indicator .dot");
    
    img.style.opacity = 0;
    
    setTimeout(() => {
        currentPhotoIdx = (currentPhotoIdx + 1) % orangePhotos.length;
        img.src = orangePhotos[currentPhotoIdx];
        
        dots.forEach((dot, idx) => {
            if (idx === currentPhotoIdx) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
        
        img.style.opacity = 1;
    }, 400); // 400ms to match the CSS transition duration
}
