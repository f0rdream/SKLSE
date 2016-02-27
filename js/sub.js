var editorIntro = document.getElementsByClassName("editorIntro")[0];
var editorContent = document.getElementsByClassName("editorContent")[0];
function editorIOn(){
    editorIntro.setAttribute("class", "editor editorIntro eDisplayed");
}
function editorIOff(){
    editorIntro.setAttribute("class", "editor editorIntro");
}
function editorCOn(){
    editorContent.setAttribute("class", "editor editorContent eDisplayed");
}
function editorCOff(){
    editorContent.setAttribute("class", "editor editorContent");
}