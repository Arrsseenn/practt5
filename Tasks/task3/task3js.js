document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const result = document.getElementById('result');

    submitButton.addEventListener('click', () => {
        const selectedAnimal = document.querySelector('input[name="animal"]:checked');
        if (selectedAnimal) {
            if (selectedAnimal.value === 'dog') {
                result.textContent = 'Правильно! Собака каже "гав".';
                result.style.color = 'green';
            } else {
                result.textContent = 'Неправильно. Спробуйте ще раз.';
                result.style.color = 'red';
            }
        } else {
            result.textContent = 'Будь ласка, виберіть відповідь.';
            result.style.color = 'blue';
        }
    });
});
