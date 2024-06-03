document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    
    colorPicker.addEventListener('change', () => {
        document.body.style.backgroundColor = colorPicker.value;
    });
});