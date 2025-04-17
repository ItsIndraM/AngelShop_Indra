document.getElementById('registerButton').addEventListener('click', function() {
    showForm('Daftar Akun', 'Daftar');
});

document.getElementById('loginButton').addEventListener('click', function() {
    showForm('Masuk Akun', 'Masuk');
});

function showForm(title, buttonText) {
    document.getElementById('formTitle').innerText = title;
    document.getElementById('submitButton').innerText = buttonText;
    document.getElementById('formContainer').style.display = 'block';
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const action = document.getElementById('submitButton').innerText;

    if (action === 'Daftar') {
        alert(`Akun berhasil didaftarkan!\nUsername: ${username}`);
    } else {
        alert(`Selamat datang, ${username}!`);
    }
});