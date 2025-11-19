
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de aparición al hacer scroll
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Activar el carrusel de testimonios
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselTestimonios'), {
        interval: 5000, // Cambia de testimonio cada 5 segundos
        ride: 'carousel'
    });

});
