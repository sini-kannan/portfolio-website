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

// Interactive Skills Tabs
function openSkillTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
