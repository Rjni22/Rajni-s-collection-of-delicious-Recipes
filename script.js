// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.querySelector('.contact form');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const number = document.getElementById('number').value.trim();
        const recipe = document.getElementById('recipe').value.trim();
        const ingredients = document.getElementById('Ingredients').value.trim();
        const steps = document.getElementById('Steps').value.trim();

        // Simple validation
        if (!name || !email || !number || !recipe || !ingredients || !steps) {
            alert("Please fill in all fields.");
            return;
        }

        // Optionally, you can add more advanced validation here (e.g., email format)

        // Simulate form submission (you could replace this with an actual API call)
        console.log("Form Submitted Successfully!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Number:", number);
        console.log("Recipe Name:", recipe);
        console.log("Ingredients:", ingredients);
        console.log("Preparation Steps:", steps);

        // Show a confirmation message
        alert("Thank you for your submission!");

        // Reset the form after submission
        form.reset();
    });
});