
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
search();}
}

function search(event){
if(nappi()>0 &&event.which==13){
nappi();}
}

/* Pääfunktio alkaa */

function addBtn() {
var li = document.createElement("li");
li.appendChild(document.createTextNode(ul.value));
ul.appendChild(li);
search.value="";
}

/* Pääfunktio loppuu */

search.addEventListener("click", search);
search.addEventListener("keypress", search);

