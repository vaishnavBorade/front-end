document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'u') {
        // Select the username input field by its ID
        const usernameInput = document.querySelector('input[type="text"]');

        // Focus on the username input field
        if (usernameInput) {
            usernameInput.focus();

            // Prevent the default behavior (inputting the "u" character) when focusing on the username field
            event.preventDefault();
        }
    } else if (event.key.toLowerCase() === 'p') {
        // Select the password input field by its ID
        const passwordInput = document.querySelector('input[type="password"]');

        // Focus on the password input field
        if (passwordInput) {
            passwordInput.focus();

            // Prevent the default behavior (inputting the "p" character) when focusing on the password field
            event.preventDefault();
        }
    } else if (event.key.toLowerCase() === 'r') {
        // Select the Register button by its ID
        const registerButton = document.getElementById('sign-up-btn');

        // Trigger a click event on the Register button
        if (registerButton) {
            registerButton.click();

            // Wait for a short delay for the transition to the Register page
            setTimeout(() => {
                // Get the text content of the h3 and paragraph within the Register panel
                const registerHeader = document.querySelector('.panel.left-panel .content h3');
                const registerParagraph = document.querySelector('.panel.left-panel .content p');

                // Combine the text content of the h3 and paragraph
                const registerText = `${registerHeader.textContent}. ${registerParagraph.textContent}`;

                // Convert the text to speech
                convertTextToSpeech(registerText);
            }, 1000); // Adjust the delay (in milliseconds) as needed
        }
    } else if (event.key.toLowerCase() === 'g') {
        // Redirect to the "games.html" page
        window.location.href = "games.html";
    }
    else if (event.key.toLowerCase() === 'e') {
        // Redirect to the "games.html" page
        window.location.href = "videocards.html";
    }
    else if (event.key.toLowerCase() === 'q') {
        // Redirect to the "games.html" page
        window.location.href = "quiz.html";
    }
    
});

// Function to convert text to speech with custom rate
function convertTextToSpeech(text, rate = 1.0) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the speech rate
    utterance.rate = rate;

    synth.speak(utterance);
}

// Automatically trigger TTS when the page loads for the welcome message
window.addEventListener('load', () => {
    const text = document.getElementById('textToRead').innerText;

    // Adjust the rate as needed (0.8 for slower speech in this example)
    convertTextToSpeech(text, 0.8);
});
window.addEventListener('load', () => {
    // Select a specific element with the "ttr" class (e.g., a div or p element)
    const textElement = document.querySelector('.ttr');

    if (textElement) {
        // Retrieve the inner text of the selected element
        const text = textElement.innerText;

        // Adjust the rate as needed (0.8 for slower speech in this example)
        convertTextToSpeech(text, 0.8);
    }
});
