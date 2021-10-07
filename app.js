
const slideshowImages =document.querySelectorAll(".MainSlides");

let currentImageCounter = 0;
const nextImagedelay = 4000;

slideshowImages[currentImageCounter].style.opacity=1;

setInterval(nextImage, nextImagedelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter +1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity= 1;
}
function clock(){
    var date= new Date();
    var hour= date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var time = hour + ":"+ minutes +":"+ seconds;
    document.getElementById("MainClock").innerText = time;
    document.getElementById("MainClock").textContent = time;

    setTimeout(clock,1000);
}
clock();
