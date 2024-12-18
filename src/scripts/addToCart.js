function addToCart(imageSrc, price, title, productId) {
    axios.post('http://localhost:8080/api/cart/add', {
        productId: productId,
        title: title,
        price: price,
        imgSrc: imageSrc
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // JWT ile doğrulama
        }
    })
    .then(response => {
        console.log("Ürün sepete eklendi:", response.data);
    })
    .catch(error => {
        console.error("Sepete ekleme hatası:", error.response ? error.response.data : error.message);
    });
}
