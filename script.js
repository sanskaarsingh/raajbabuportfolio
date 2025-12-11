const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-lightbox');
const cards = document.querySelectorAll('.gallery-card');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = "X";
        hamburger.style.color = "#fff";
    } else {
        hamburger.innerHTML = "///";
        hamburger.style.color = "#ccff00";
    }
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = "///";
        hamburger.style.color = "#ccff00";
    });
});
cards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        lightboxImg.src = img.src; 
        lightbox.classList.add('active');
    });
});


closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});