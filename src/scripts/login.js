function handleLogin() {
    var username = document.getElementById("username").value.trim(); // boşlukları temizlemek için
    var password = document.getElementById("password").value.trim();
    var errorMessage = document.getElementById("error-message");

    // Önceki mesajı temizle
    errorMessage.innerHTML = '';
    errorMessage.className = ''; // Sınıfı sıfırla

    if (username === "" || password === "") {
        errorMessage.innerHTML = "Lütfen Geçerli Bir Kullanıcı Adı Ve Şifre Girin.";
        errorMessage.className = "text-red-600 text-sm text-center"; // Hata mesajı için sınıf
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
        errorMessage.innerHTML = "Kullanıcı Girişi Başarılı";
        errorMessage.className = "text-green-600 text-sm text-center"; // Başarılı mesaj için yeşil sınıf
        localStorage.setItem("username", username); // Kullanıcı adını sakla
        updateNavbar(); // Navbar'ı güncelle
    })
    .catch(error => {
        console.error(error.response ? error.response.data : error.message);
        errorMessage.innerHTML = "Kullanıcı Adı veya Şifre Yanlış";
        errorMessage.className = "text-red-600 text-sm text-center"; // Hata mesajı için kırmızı sınıf
    });
}

// Sayfa yüklendiğinde navbar'ı güncelle
document.addEventListener("DOMContentLoaded", function () {
    updateNavbar(); 
});
