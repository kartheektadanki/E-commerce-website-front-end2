
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#loginForm");
    const errorMessage = document.querySelector("#error-message");

    // Predefined credentials
    const users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
    ];

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        const validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            window.location.href = "index.html"; 
        } else {
            errorMessage.style.display = "block";
            errorMessage.innerText = "Invalid username or password"; 
        }
    });
});
function Logout() {
    window.location.href = "LoginPage.html";
}