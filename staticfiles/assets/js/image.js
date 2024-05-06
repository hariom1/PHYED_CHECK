let element = document.getElementById("imgset");
var images;
const base = "./assets/Chemistry/Thermo/Thermodynamics_00"
for (var i = 9; i <= 347; i++) {
    images = new Image();
    if (i < 10) {
        images.src = base + "00" + i + ".jpg";
    }
    else if (i < 100) {
        images.src = base + "0" + i + ".jpg";
    }
    else if (i < 1000) {
        images.src = base + i + ".jpg";
    }
    images.className = "carousel-item";
    images.alt = "not available";
    element.appendChild(images);
}
