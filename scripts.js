// Simple script to handle button clicks or other dynamic actions
document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('click', function() {
        alert(`${button.textContent} clicked, thank you for testing!`);
    });
});
