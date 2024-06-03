document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('emailForm').addEventListener('submit', function (event) {
        event.preventDefault();
        sendEmail();
    });
});

function sendEmail() {
    var email = document.getElementById('email').value;

    if (validateEmail(email)) {
        var mailtoLink = "mailto:recipient@example.com?subject=Email%20Submission&body=" + encodeURIComponent("Email: " + email);
        window.location.href = mailtoLink;
        alert("Вашу електронну адресу відправлено!");
    } else {
        alert("Будь ласка, введіть дійсну електронну адресу.");
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
