document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -150px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
});

const projectGrid = document.querySelector('.project-grid');
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
});

projects.forEach((project) => {
    const img = project.querySelector('img');
    const imgUrl = img.getAttribute('src');
    project.style.setProperty('--project-image', `url(${imgUrl})`);
    observer.observe(project);
  });