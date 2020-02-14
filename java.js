var search = document.getElementById("search");
var nappi = document.getElementById("nappi");
var li = document.getElementsByTagName("li");
var ul = document.querySelector("ul");

function search(){
  return search.value.length;
}

function li(){
  return li.length;
}

function search(){
  if(search()>0){
    x();}
}

function x(event){
  if(nappi()>0 &&event.which==13){
    x();}
}

/* Pääfunktio alkaa */
function syotto() {
var li = document.createElement("li");
li.appendChild(document.createTextNode(x.value));
ul.appendChild(li);
search.value="";
}
/* Pääfunktio loppuu */

x.addEventListener("click", x);
x.addEventListener("keypress", x);
