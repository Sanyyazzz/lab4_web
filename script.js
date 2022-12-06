//task1

let srcString = document.getElementById("srcString");
let images = document.querySelectorAll('img');

for(let i of images){
    i.addEventListener("click", showSrc);
}

function showSrc(){
    srcString.innerText = this.src;
}

//task2

let numbers = document.getElementById("numbers")

for(let p of numbers.childNodes){
    p.addEventListener("click", squareNumber)
}

function squareNumber(){
    this.innerText = this.innerText * this.innerText;
}

//task3

let links = document.getElementById("links");

for(let p of links.childNodes){
    p.addEventListener("mouseover", showHref)
}

function showHref(){
    if(this.innerText != this.innerText+"("+this.href+")"){
        this.innerText = this.innerText+"("+this.href+")";
    }
    this.removeEventListener("mouseover", showHref);
}

//task4

let inputs = document.getElementById("inputs");

for(let p of inputs.childNodes){
    p.addEventListener("blur", checkLength)
}

function checkLength(){
    if(this.value.length == 10){
        this.style.borderColor = "green";
    }else{
        this.style.borderColor = "red";
    }
}

//task5
let checkClassButton = document.getElementById("checkClass");
let changeClassButton = document.getElementById("changeClass");
let countOfClass = document.getElementById("countOfClass");
let pib = document.getElementById("pib");

changeClassButton.addEventListener("click", changeClass)
checkClassButton.addEventListener("click", checkClass)

function changeClass(){
    if(pib.classList.contains("p")){
        pib.classList.remove("p")
    }else{
        pib.classList.add("p")
    }
}

function checkClass(){
    countOfClass.innerText = `Count of class: ${pib.classList.length} (${pib.classList})`;
}

//task6
let list = document.getElementById("list");
let addRowToList = document.getElementById("addRow");
let deleteRowInList = document.getElementById("deleteRow");

addRowToList.addEventListener("click", addRow)
deleteRowInList.addEventListener("click", deleteRowFromButton)
for(let k of list.childNodes){
    k.addEventListener("click", deleteRow);
};

function  addRow(){
    let row = document.createElement("li");
    row.innerText = Math.random().toFixed(2)*100;
    row.addEventListener("click", deleteRow);
    list.appendChild(row);
}

function  deleteRowFromButton(){
    list.removeChild(list.lastElementChild);
}

function  deleteRow(){
    list.removeChild(this);
}

//task7
var acc = document.getElementsByClassName("accordion");
var activeChapter = false;

for (let i of acc) {
    i.addEventListener("click", displayContent);
}

function displayContent() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if(content.style.display == "block"){
        content.style.display = "none"
        activeChapter=false;
    }else{
        if(!activeChapter){
            content.style.display = "block";
            activeChapter=true;
        }
    }
}

//task8
var addButton = document.getElementById("addSlot");
var palitre = document.getElementById("palitre");

addButton.addEventListener("click", addSlot);

for(let s of palitre.children){
    s.addEventListener("click", deleteSlot)
}

function addSlot(){
    if(palitre.children.length < 9){
        let slot = document.createElement("div");
        slot.addEventListener("click", deleteSlot);
        slot.className = "slot";
        slot.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        palitre.appendChild(slot);
    }
}

function deleteSlot(){
    palitre.removeChild(this);
}

//task9
var textArea = document.getElementById("text")
var color = document.getElementById("colorButton");
var decoration = document.getElementById("typeDecoration");
var size = document.getElementById("fontSize");
var style = document.getElementById("fontStyle");

for(let c of color.children){
    c.addEventListener("click", changeColor)
}

for(let d of decoration.children){
    d.addEventListener("click", changeDec)
}

size.addEventListener("change", changeSize)
style.addEventListener("change", changeStyle)

function changeColor(){
    textArea.style.color = this.className;
}

function changeDec(){
    if(!this.classList.contains("active")){
        textArea.classList.add(this.className);
        this.classList.add("active");
    }else{
        this.classList.remove("active");
        textArea.classList.remove(this.className);
    }
}

function changeSize(){
    textArea.style.fontSize = size.value+'px';
}

function changeStyle(){
    textArea.style.fontFamily = style.value;
}

//task10
var comments = document.getElementById("comments")
var authorName = document.getElementById("authorName")
var commentText = document.getElementById("comment")
var addButt = document.getElementById("addComment")

addButt.addEventListener("click", addComment)

function addComment(){
    let dateNow = new Date();
    let comment = document.createElement("div");

    let author = document.createElement("h4");
    author.appendChild(document.createTextNode(authorName.value));

    let commentContent = document.createElement("article");
    commentContent.appendChild(document.createTextNode(commentText.value));

    let date = document.createElement("article");
    date.appendChild(document.createTextNode(dateNow.getDate().toString() + "." + dateNow.getMonth().toString() + "." + dateNow.getFullYear().toString()));

    authorName.value = "";
    commentText.value = "";

    comment.appendChild(author);
    comment.appendChild(date);
    comment.appendChild(commentContent);

    comment.classList.add("author");

    comments.appendChild(comment)
}