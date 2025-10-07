const BookList = [];
const BookContainer = document.querySelector(".container");

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

    remove.addEventListener("click", (e)=>{
        
        eachBook.remove();
    });

    remove.addEventListener("mouseover", ()=>{
        remove.style.backgroundColor = "rgba(153, 74, 9, 1)";
    });

    remove.addEventListener("mouseout",()=>{
        remove.style.backgroundColor = "rgb(58, 27, 1)"
    });
});

