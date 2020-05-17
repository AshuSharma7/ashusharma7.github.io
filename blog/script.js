var bg = document.getElementById("head");
bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://www.androidguys.com/wp-content/uploads/2015/11/brain-sides.png')";

var recent = document.querySelectorAll("#recent > div");
for (var i = 0; i < recent.length; i++) {
    var p = recent[i].querySelector('p');
    p.innerHTML = "POST " + (i + 1);
}

var image = document.getElementsByClassName("image");
for (var i = 0; i < image.length; i++) {
    image[i].innerHTML = "IMAGE HERE";
}
// let day = new Date();
// var date = document.getElementsByClassName("date");
// for (var i = 0; i < date.length; i++) {
//     date[i].innerHTML = "Date: " + day.getDate() + " " + day.getFullYear();
// }