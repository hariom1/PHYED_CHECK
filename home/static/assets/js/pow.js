let element = document.getElementById("imgset");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let head = document.querySelector(".headi");
var images;
const mod_a = "./assets/POW/Module1_Introduction_SHM_00007/Module1_Introduction_SHM_00";
const mod_b = "./assets/POW/Module2_EM_Waves_00001/Module2_EM_Waves_00";
const mod_c = "./assets/POW/Module3_Diffraction_00001/Module3_Diffraction_00";
const mod_d = "./assets/POW/Module4_QM1_00001/Module4_QM1_00";
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
            images.className = "carousel-item mod" + base[21];
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
    var activated = document.querySelector(".modE");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link2.innerHTML;
});
link3.addEventListener('click', function () {
    var activated = document.querySelector(".modD");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link3.innerHTML;

});
link4.addEventListener('click', function () {
    var activated = document.querySelector(".modQ");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link4.innerHTML;

});
link1.addEventListener('click', function () {
    var activated = document.querySelector(".modI");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link1.innerHTML;

});
adder(mod_a, 8, 61);
adder(mod_b, 1, 59);
adder(mod_c,1,29);
adder(mod_d,1,46);