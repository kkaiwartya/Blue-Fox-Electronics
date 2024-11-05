// Function to handle form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contact-form form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Show a confirmation message
        alert("Thank you for your message! We will get back to you soon.");
        
        // Optionally reset the form
        form.reset();
    });
});
