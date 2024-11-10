function changeImage(num) {
    const mainImage = document.getElementById('Images');

    if (num == 0) {
        mainImage.src = "Image-1.jpg";
    }
    else if (num == 1) {
        mainImage.src = "Image-2.jpg";
    }
    else if (num == 2) {
        mainImage.src = "Image-3.jpg";
    }
    else if (num == 3) {
        mainImage.src = "Image-4.jpg";
    }
    else if (num == 4) {
        mainImage.src = "Image-5.jpg";
    }
}