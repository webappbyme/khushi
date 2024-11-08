function calculateFee() {
    const programFee = parseInt(document.getElementById('program').value);
    const credits = parseInt(document.getElementById('credits').value);
    const totalFee = programFee * credits;
    document.getElementById('fee-result').innerText = "Estimated Tuition Fee: $" + totalFee;
}

// Add Scroll Animations
window.addEventListener('scroll', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const slideInLefts = document.querySelectorAll('.slide-in-left');
    const slideInRights = document.querySelectorAll('.slide-in-right');
    const screenPosition = window.innerHeight / 1.3;

    fadeIns.forEach(img => {
        if (img.getBoundingClientRect().top < screenPosition) {
            img.classList.add('fade-in');
        }
    });

    slideInLefts.forEach(img => {
        if (img.getBoundingClientRect().top < screenPosition) {
            img.classList.add('slide-in-left');
        }
    });

    slideInRights.forEach(img => {
        if (img.getBoundingClientRect().top < screenPosition) {
            img.classList.add('slide-in-right');
        }
    });
});
