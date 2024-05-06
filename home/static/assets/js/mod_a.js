let element = document.getElementById("imgset");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let head = document.querySelector(".headi");
var images;
const mod_a = "./assets/Electrical/Mod_A -Compatibility Mode-_00005/Mod_A [Compatibility Mode]_00";
const mod_b = "./assets/Electrical/Mod_B -Compatibility Mode-_00001/Mod_B [Compatibility Mode]_00";
const mod_c = "./assets/Electrical/Mod_C -Compatibility Mode-_00001-1/Mod_C [Compatibility Mode]_00";
const mod_d = "./assets/Electrical/Mod_D -Compatibility Mode-_00002/Mod_D [Compatibility Mode]_00";
function adder(base, start, end) {
    for (var i = start; i <= end; i++) {
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
        if (start == i) {
            images.className = "carousel-item mod" + base[24];
        }
        else {
            images.className = "carousel-item";
        }
        images.width = "50%";
        images.alt = "not available";
        element.appendChild(images);
    }
}
link2.addEventListener('click', function () {
    let active = document.querySelector(".active");
    var activated = document.querySelector(".modB");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link2.innerHTML;
});
link3.addEventListener('click', function () {
    var activated = document.querySelector(".modC");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link3.innerHTML;

});
link4.addEventListener('click', function () {
    var activated = document.querySelector(".modD");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link4.innerHTML;

});
link1.addEventListener('click', function () {
    var activated = document.querySelector(".modA");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link1.innerHTML;

});
adder(mod_a, 6, 102);
adder(mod_b, 2, 46);
adder(mod_c,2,28);
adder(mod_d,2,77);