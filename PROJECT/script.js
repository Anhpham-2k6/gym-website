// 1. Hiệu ứng thanh điều hướng đổi màu khi cuộn trang
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// 2. Menu Hamburger cho màn hình điện thoại
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    // Burger Animation
    hamburger.classList.toggle('toggle');
});

// 3. Đóng menu khi click vào một link (trên mobile)
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    });
});

// 4. Smooth Scrolling (Cuộn mượt) khi ấn vào các thẻ neo (anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});