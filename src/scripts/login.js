function handleLogin() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var errorMessage = document.getElementById("error-message");

    // Önceki mesajı temizle
    errorMessage.innerHTML = '';
    errorMessage.className = '';

    if (username === "" || password === "") {
        errorMessage.innerHTML = "Lütfen Geçerli Bir Kullanıcı Adı Ve Şifre Girin.";
        errorMessage.className = "text-red-600 text-sm text-center"; 
        return;
    }

    axios.post("http://localhost:8080/api/user/login", {
        username: username,
        password: password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response.data);
        localStorage.setItem("token", response.data); // Token'ı localStorage'a kaydet
        localStorage.setItem("username", username);
        errorMessage.innerHTML = "Kullanıcı Girişi Başarılı";
        errorMessage.className = "text-green-600 text-sm text-center"; 
        updateNavbar(); 
    })
    .catch(error => {
        console.error(error.response ? error.response.data : error.message);
        errorMessage.innerHTML = "Kullanıcı Adı veya Şifre Yanlış";
        errorMessage.className = "text-red-600 text-sm text-center"; 
    });
}
