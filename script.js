document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ميكانيكية القائمة الجانبية (Mobile Menu)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const toggleIcon = menuToggle.querySelector('i');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // تبديل شكل الأيقونة بين (بارات) و (X)
            if (navLinks.classList.contains('active')) {
                toggleIcon.classList.replace('fa-bars', 'fa-times');
            } else {
                toggleIcon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // 2. إغلاق القائمة عند الضغط على أي رابط (للسكرول الناعم)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggleIcon.classList.replace('fa-times', 'fa-bars');
        });
    });

    // 3. أنيميشن الظهور عند التمرير (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // 4. تأثير الهيدر عند السكرول (تغيير الحجم أو الظل)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});