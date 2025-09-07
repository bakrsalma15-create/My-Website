
// Yay, you found the password
const correctPassword = "thisisnotsecure";
    const submitBtn = document.getElementById("submitBtn");
    const passwordField = document.getElementById("passwordField");
    const hiddenContent = document.getElementById("hiddenContent");

    const wrongMessages = [
        "Try again",
        "Nope!",
        "Don't give up!",
        "Look further and you shall find it"
    ];
    let attemptIndex = 0; // tracks which message to show

    submitBtn.addEventListener("click", () => {
        const entered = passwordField.value;
        if (entered === correctPassword) {
            hiddenContent.style.display = "block";
            attemptIndex = 0; // reset attempts
        } else {
            alert(wrongMessages[attemptIndex]);
            attemptIndex = (attemptIndex + 1) % wrongMessages.length; // loop messages
            hiddenContent.style.display = "none";
        }
        passwordField.value = "";
    });

    // Optional: submit on Enter key
    passwordField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            submitBtn.click();
        }
    });