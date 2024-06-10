var btn=document.querySelector("button");
btn.onclick=function change(){
    var t1=document.getElementById("in_name");
    var t2=document.getElementById("in_sex");
    var name=document.getElementById("in_name").value;
    var sex=document.getElementById("in_sex").value;
    t1.value=name;
    t2.value=sex;
}