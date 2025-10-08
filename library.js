const BookList = [];
const BookContainer = document.querySelector(".container");
const addbtn = document.getElementById("Add");
const dialog = document.querySelector("dialog");
const submitbtn = document.querySelector("#submitbtn");
const cancelbtn = document.querySelector("#cancelbtn");
const title = document.querySelector("#title");
const bookauthor = document.querySelector("#author");
const pagecount = document.querySelector("#pages");
const completed = document.querySelector("#readstatus");

// show form on display
addbtn.addEventListener("click", ()=>{
    dialog.showModal();
});

cancelbtn.addEventListener("click", ()=>{
    dialog.close();
});

submitbtn.addEventListener("click", (e)=>{
    e.preventDefault();

    getBookDetails(title.value, bookauthor.value, parseInt(pagecount.value),completed.value);

    title.value="";
    bookauthor.value ="";
    pagecount.value="";
    completed.value ="true";
    dialog.close();

});

function Book(name, author, pages, status){
    this.Id = crypto.randomUUID();
    this.bookName= name;
    this.author = author;
    this.noOfPages = pages;
    this.status = status;
    this.info = function(){
        return this.status ? "read" : "not read";
         
    }
}

function getBookDetails(title, writer, totalpages, readStatus){
    const infor= new Book(title, writer, totalpages, readStatus);
    BookList.push(infor);
}

getBookDetails("1984", "George Orwell", 328, true);
getBookDetails("To Kill a Mockingbird", "Harper Lee", 281, false);

BookList.forEach(element => {
    // adding book details to display
    const eachBook = document.createElement("div");
    eachBook.classList.add("cards");
    eachBook.innerHTML = ` Title: <strong> ${element.bookName}</strong> <br> Author: <strong>${element.author} </strong> <br> Status: <strong>${element.info() }</strong> <br>`;
    BookContainer.appendChild(eachBook);

    // removing book from display in user click
    const remove = document.createElement("button");
    remove.id = "remove"
    remove.textContent = "Delete";
    eachBook.append(remove);

    remove.addEventListener("click", ()=>{
        eachBook.remove();
    });

    remove.addEventListener("mouseover", ()=>{
        remove.style.backgroundColor = "rgba(153, 74, 9, 1)";
    });

    remove.addEventListener("mouseout",()=>{
        remove.style.backgroundColor = "rgb(58, 27, 1)"
    });
});

