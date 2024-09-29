$(document).ready(function () {
    // Slide up animation
    const slideUpObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.content-slide-up').forEach(function (element) {
        slideUpObserver.observe(element);
    });
    // End slide up animation

    // Slide down animation
    const slideDownObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-down');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.content-slide-down').forEach(function (element) {
        slideDownObserver.observe(element);
    });
    // End slide down animation

    // Slide left animation
    const slideLeftObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-left');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.content-slide-left').forEach(function (element) {
        slideLeftObserver.observe(element);
    });
    // End slide left animation

    // Slide right animation
    const slideRightObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-right');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.content-slide-right').forEach(function (element) {
        slideRightObserver.observe(element);
    });
    // End slide right animation
});