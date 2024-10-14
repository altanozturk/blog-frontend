function updateNavbar() {
    const username = localStorage.getItem("username");
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    navbarPlaceholder.innerHTML = `
        <nav class="bg-slate-600 shadow-sm shadow-slate-300 h-16">
            <div class="container mx-auto px-4 text-gray-300 py-3 flex items-center h-16">
                <a href="index.html">
                    <span><i class="fa-brands fa-uncharted text-2xl flex items-center hover:text-gray-600 transition"></i></span>
                </a>
                <div class="ml-12 flex">
                    <a href="index.html" class="flex items-center hover:text-gray-600 transition">
                        <span class="mr-2"> <i class="fa-solid fa-house"></i> </span>
                        Ana Sayfa
                    </a>
                </div>
                <div class="ml-12 flex">
                    <a href="menu.html" class="flex items-center hover:text-gray-600 transition">
                        <span class="mr-2"> <i class="fa-solid fa-comment"></i> </span>
                        Menü
                    </a>
                </div>
                <div class="ml-12 flex">
                    <a href="renkler.html" class="flex items-center hover:text-gray-600 transition">
                        <span class="mr-2"> <i class="fa-solid fa-brush"></i> </span>
                        Renkleri Karıştır
                    </a>
                </div>
                <div class="ml-12 flex">
                    <a href="fuel.html" class="flex items-center hover:text-gray-600 transition">
                        <span class="mr-2"> <i class="fa-solid fa-gas-pump"></i> </span>
                        Arabam Kaç Yakar?
                    </a>
                </div>

                <div class="relative ml-auto flex items-center">
                    ${username ? `
                        <div class="flex items-center mr-4">
                            <span class="mr-2"> <i class="fa-solid fa-user"></i></span>
                            ${username}
                        </div>
                        <div>
                            <button onclick="logout()" class="flex items-center text-gray-200 transition hover:text-gray-600">
                                <span class="mr-2"> <i class="fa-solid fa-sign-out-alt"></i></span>
                                Çıkış Yap
                            </button>
                        </div>
                    ` : `
                        <div class="ml-5">
                            <a href="login.html" class="flex items-center text-gray-200 transition hover:text-gray-600">
                                <span class="mr-2"> <i class="fa-solid fa-user"></i></span>
                                Giriş Yap / Kayıt Ol
                            </a>
                        </div>
                    `}
                </div>
            </div>
        </nav>
    `;
}

function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html"; // Çıkış yaptıktan sonra ana sayfaya yönlendir
}
