function changePics(i) {
    if (i == 1) {
        document.getElementById("single-product-image").src="img/perfume2.jpg"
    } else if (i == 2){
        document.getElementById("single-product-image").src="img/perfume8.jpg"
    } else if (i == 3){
        document.getElementById("single-product-image").src="img/perfume10.jpg"
    } else if (i == 0){
        document.getElementById("single-product-image").src="img/perfume2.jpg"
    }
     
}

function popup() {
	document.getElementById('popup').classList.toggle('active');
}