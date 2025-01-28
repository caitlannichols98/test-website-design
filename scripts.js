// Handle link clicks
document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent navigation for testing
        alert(`${link.id} clicked, thank you for testing!`);
    });
});
