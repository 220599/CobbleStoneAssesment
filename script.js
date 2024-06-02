document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleElement = document.getElementById('toggleElement');

    toggleButton.addEventListener('click', function() {
        if (toggleElement.style.display === 'none') {
            toggleElement.style.display = 'block';
        } else {
            toggleElement.style.display = 'none';
        }
    });
});
