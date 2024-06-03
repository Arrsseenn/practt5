document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const result = document.getElementById('result');

    submitButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (password !== confirmPassword) {
            result.textContent = 'Паролі не співпадають. Будь ласка, спробуйте ще раз.';
            result.style.color = 'red';
            return;
        }

        if (!username || !password || !confirmPassword || !firstName || !lastName || !email || !phone) {
            result.textContent = 'Будь ласка, заповніть всі поля.';
            result.style.color = 'red';
            return;
        }
        result.textContent = 'Реєстрація успішна!';
        result.style.color = 'green';      
    });
});
