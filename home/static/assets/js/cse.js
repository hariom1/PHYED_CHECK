let element = document.getElementById("images");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let link4 = document.querySelector(".link4");
let link5 = document.querySelector(".link5");
let link6 = document.querySelector(".link6");
let link7 = document.querySelector(".link7");
let link8 = document.querySelector(".link8");
let link9 = document.querySelector(".link9");
let link10 = document.querySelector(".link10");
let link11 = document.querySelector(".link11");
let link12 = document.querySelector(".link12");
let link13 = document.querySelector(".link13");
let link14 = document.querySelector(".link14");
let head = document.querySelector(".headi");
var images;

const LectA = "./assets/cse images/C LANGUAGE/LectA 1_00001/Lect 1_00"
const LectB = "./assets/cse images/C LANGUAGE/LectB 5_00001/LEC5_00"
const LectC = "./assets/cse images/C LANGUAGE/LectC 2-4_00001/LECT2-4_00"
const LectD = "./assets/cse images/C LANGUAGE/LectD 6--8_00001/Lect 6--8_00"
const LectE = "./assets/cse images/C LANGUAGE/LectE 9-10-11_00001/Lect 9-10-11_00"
const LectF = "./assets/cse images/C LANGUAGE/LectF 12-13-14_00001/Lect 12-13-14_00"
const LectG = "./assets/cse images/C LANGUAGE/LectG 15-17_00001/Lectures 15-17_00"
const LectH = "./assets/cse images/C LANGUAGE/LectH 18-19-20_00001/Lect 18-19-20_00"
const LectI = "./assets/cse images/C LANGUAGE/LectI 21-22-23_00001/Lect 21-22-23_00"
const LectJ = "./assets/cse images/C LANGUAGE/LectJ 24_25_26_00001/Lectures_24_25_26_00"
const LectK = "./assets/cse images/C LANGUAGE/Lectk 27_28_00001/Lectures_27_28_00"
const LectL = "./assets/cse images/C LANGUAGE/LectL 29_00001/Lecture_29_00"
const LectM = "./assets/cse images/C LANGUAGE/LectM 30_00001/Lecture_30_00"
const LectN = "./assets/cse images/C LANGUAGE/LectN 30_1(queue)_00001/Lecture_30_1(queue)_00"
const mod_a = "./assets/cse images/C LANGUAGE/Lect 1_00001/Lect 1_0000${i}.jpg";
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
            images.className = "carousel-item Lect" + base[35];
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
    var activated = document.querySelector(".LectB");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link2.innerHTML;
});
link3.addEventListener('click', function () {
    var activated = document.querySelector(".LectC");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link3.innerHTML;

});
link4.addEventListener('click', function () {
    var activated = document.querySelector(".LectD");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link4.innerHTML;

});
link5.addEventListener('click', function () {
    var activated = document.querySelector(".LectE");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link5.innerHTML;

});
link6.addEventListener('click', function () {
    var activated = document.querySelector(".LectF");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link6.innerHTML;

});
link7.addEventListener('click', function () {
    var activated = document.querySelector(".LectG");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link7.innerHTML;

});
link8.addEventListener('click', function () {
    var activated = document.querySelector(".LectH");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link8.innerHTML;

});
link9.addEventListener('click', function () {
    var activated = document.querySelector(".LectI");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link9.innerHTML;

});
link10.addEventListener('click', function () {
    var activated = document.querySelector(".LectJ");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link10.innerHTML;

});
link11.addEventListener('click', function () {
    var activated = document.querySelector(".LectK");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link11.innerHTML;

});
link12.addEventListener('click', function () {
    var activated = document.querySelector(".LectL");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link12.innerHTML;

});
link13.addEventListener('click', function () {
    var activated = document.querySelector(".LectM");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link13.innerHTML;

});
link14.addEventListener('click', function () {
    var activated = document.querySelector(".LectN");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link14.innerHTML;

});

link1.addEventListener('click', function () {
    var activated = document.querySelector(".LectA");
    let active = document.querySelector(".active");
    active.classList.remove("active");
    activated.className += " active";
    head.innerHTML=link1.innerHTML;
});

adder(LectA, 5, 60);
adder(LectB, 1, 46);
adder(LectC, 1, 82);
adder(LectD, 2, 72);
adder(LectE, 1, 45);
adder(LectF, 1, 60);
adder(LectG, 1, 62);
adder(LectH, 1, 40);
adder(LectI, 1, 48);
adder(LectJ, 1, 68);
adder(LectK, 1, 53);
adder(LectL, 1, 39);
adder(LectM, 1, 11);
adder(LectN, 1, 12);