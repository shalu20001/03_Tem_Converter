// script.js

function convertFromCelsius() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        document.getElementById('resultFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
        document.getElementById('resultKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)}`;
    }
}

function convertFromFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        const kelvin = (fahrenheit - 32) * 5/9 + 273.15;

        document.getElementById('resultCelsius').innerText = `Celsius: ${celsius.toFixed(2)}`;
        document.getElementById('resultKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)}`;
    }
}

function convertFromKelvin() {
    const kelvin = parseFloat(document.getElementById('kelvin').value);
    if (!isNaN(kelvin)) {
        const celsius = kelvin - 273.15;
        const fahrenheit = (kelvin - 273.15) * 9/5 + 32;

        document.getElementById('resultCelsius').innerText = `Celsius: ${celsius.toFixed(2)}`;
        document.getElementById('resultFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    }
}

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('change', (event) => {
    document.body.classList.toggle('dark-mode', event.target.checked);
    document.querySelectorAll('.container, input, button, label, .results').forEach(el => {
        el.classList.toggle('dark-mode', event.target.checked);
    });
});
