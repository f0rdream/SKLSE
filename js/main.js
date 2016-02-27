function loginDisplay(){
    var loginFont = document.getElementsByClassName("loginFont")[0];
    var loginForm = document.getElementsByClassName("loginForm")[0];
    loginFont.style.display = "none";
    loginForm.style.display = "inline-block";
}

/*the pictures switching starts*/
var pSwitchPic = document.getElementsByClassName("pSwitchPic");
var picsList = document.getElementsByClassName("picsList")[0];
for(var i = 0;i < pSwitchPic.length;i++){
    var li = document.createElement("li");
    picsList.appendChild(li);
}
var lis = picsList.getElementsByTagName("li");
var x = 0;
function setLabel(){
    pSwitchPic[x].setAttribute("class", "pSwitchPic active");
    lis[x].setAttribute("class", "pointed");
}
function removeLabel(){
    pSwitchPic[x].setAttribute("class","pSwitchPic");
    lis[x].removeAttribute("class");
}
var picsPre = document.getElementsByClassName("picsPre");
var picsNext = document.getElementsByClassName("picsNext");
function addX(){
    removeLabel();
    x = x + 1;
    if(x === pSwitchPic.length){
        x = 0
    }
    setLabel();
}
function minusX(){
    removeLabel();
    x = x -1;
    if(x === -1){
        x = pSwitchPic.length - 1
    }
    setLabel();
}
picsNext.onclick = addX();
picsPre.onclick = minusX();
var liPoint = function(j){
    lis[j].onclick = function(){
        removeLabel();
        x = j;
        setLabel();
    }
}
for(var j = 0;j < pSwitchPic.length;j ++){
    liPoint(j)
}

/*the pictures ends*/
