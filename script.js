document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone-number").value;

    // Do something with the form data
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Phone Number: " + phoneNumber);

    // Reset the form after submission
    document.getElementById("myForm").reset();
    // Show a success message after the form is submitted
    alert("Form Submitted Successfully!");


});