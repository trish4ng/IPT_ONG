function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('mode-button'); // Get the button element

    body.classList.toggle('dark-mode');

    // Check if dark mode is active and update button text
    if (body.classList.contains('dark-mode')) {
        button.innerText = "Switch to Light Mode"; // Change to light mode text
    } else {
        button.innerText = "Switch to Dark Mode"; // Change to dark mode text
    }
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    const sum = num1 + num2;
    
    document.getElementById('result').innerText = `Result: ${sum}`;
}