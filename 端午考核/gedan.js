/* function play1(){
    document.getElementById("audio1").play();
}
function play2(){
    document.getElementById("audio2").play();
}
function play3(){
    document.getElementById("audio3").play();
} */
document.addEventListener('DOMContentLoaded', function() {
    var back = document.querySelector('.back');
    back.addEventListener('click', function() {
        window.location.href = 'name.html'; // 修改为目标页面的URL
    });
});