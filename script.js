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
