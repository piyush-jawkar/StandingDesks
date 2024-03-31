const images = document.querySelectorAll('.image-box');
let currentImageIndex = 0;

function showNextImage() {

    images[currentImageIndex].style.display = 'none';
    

    currentImageIndex = (currentImageIndex + 1) % images.length;


    images[currentImageIndex].style.display = 'block';
}


for (let i = 1; i < images.length; i++) {
    images[i].style.display = 'none';
}

setInterval(showNextImage, 2000); 