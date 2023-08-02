const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");

const extraInfo = document.querySelector(`.extra_info`);
const extraInfoH4 = extraInfo.querySelector(`h4`);
const image5 = document.getElementById("image5");

function myFunction(smallImg) {
    let fullImg = document.getElementById("large_img");
    fullImg.src = smallImg.src;

    let prev = document.getElementById("preview_button");
    prev.href = smallImg.src;

    let download = document.getElementById("download_button");
    download.href = smallImg.src;
}

let a = 1;


function Admissions() {
    if (a == 1) {
        extraInfoH4.innerHTML = "Admissions open form 1st March <br> till 25th April";
        extraInfo.classList.add("position_1");
        a = 0;
    } else if (a == 0) {
        extraInfo.classList.remove("position_1");
        a = 1;
    }
}

function resultS() {
    if (a == 1) {
        extraInfoH4.innerHTML = "Examination are going...";
        extraInfo.classList.add("position_2");
        a = 0;
    } else if (a == 0) {
        extraInfo.classList.add("position_2");
        a = 1;
    }
}