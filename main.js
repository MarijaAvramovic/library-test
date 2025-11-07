// console.log("test");

let library = [];
const myTable = document.querySelector('#myTable');
// console.log(myTable);


 

function Book(author, title, pages, read) {
    if(!new.target) {
        throw Error("You must use the new");
    }
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleStatus = function() {

  let isReadBook = this.read;
       if (isReadBook == true){
        this.read = false;
        
       }
       else {
        this.read = true;
       }
       
      };

function addBooktoLibrary(author, title, pages, read) {
    const book = new Book(author, title, pages, read);
    library.push(book);
}

function getBook(id) {
   const mybook = library.filter(book => book.id === id);
    return mybook[0];
}

function displayBook(book) {
    const row = document.createElement('tr');
        const dataAuthor = document.createElement('td');
        const dataTitle = document.createElement('td');
        const dataPages = document.createElement('td');
        const dataRead = document.createElement('td');
        const btnToggle = document.createElement('button');
        const dataRemove = document.createElement('td');
        const btnRemove = document.createElement('button');

        dataAuthor.textContent = book.author;
        dataTitle.textContent = book.title;
        dataPages.textContent = book.pages;
        dataRead.appendChild(btnToggle);
        if(book.read == true){
          btnToggle.textContent = 'Read';
          btnToggle.classList.add('green');
        } else{
          btnToggle.textContent = 'Not Read';
          btnToggle.classList.add('red');
        };
        btnRemove.textContent = 'Delete';

         
        row.dataset.id = book.id;
        btnRemove.dataset.btnId = book.id;
        btnRemove.classList.add('btnRemove');
        btnToggle.classList.add('btnToggle');
        btnToggle.dataset.readId = book.id;
        dataRead.dataset.read = book.id;

        row.appendChild(dataAuthor);
        row.appendChild(dataTitle);
        row.appendChild(dataPages);
        row.appendChild(dataRead);
        


        dataRemove.appendChild(btnRemove);
         
        row.appendChild(dataRemove);
         
        myTable.appendChild(row);
    
        removeBook();
        
        // console.log("ff");
         
     
}
 
 
function displayLibrary() {
    library.forEach(book => displayBook(book));
 
}


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const newAuthor = document.getElementById('author').value;
  const newTitle = document.getElementById('title').value;
  const newNumOfPages = document.getElementById('numOfPages').value;
  const newIsRead = document.getElementById('isRead').checked;

  const myBook = new Book(newAuthor, newTitle, newNumOfPages, newIsRead);
  displayBook(myBook);
  library.push(myBook);
  removeBook();
  toggleStatus();
});

 

addBooktoLibrary("Vadim Zeland", "Reality Transurfing", 844, true);
addBooktoLibrary("Vadim Zeland", "Tufty the Preastest", 144, true);
addBooktoLibrary("Bentino Massaro", "Me", 1244, false);

// test
console.log(library);
// console.log(getBook('Tufty the Preastest'));
// displayBook(getBook('Tufty the Preastest'));



 function removeBook() {
const buttonsRemoveBook = document.querySelectorAll('.btnRemove');
 console.log(buttonsRemoveBook);

buttonsRemoveBook.forEach(button => {
  button.addEventListener('click', (e) => {
    // console.log("clickedBtnId");
    const clickedBtn = e.currentTarget;
    console.log(clickedBtn);

    const dataset = clickedBtn.dataset; 
    const clickedBtnId = dataset.btnId;


    console.log(clickedBtnId);
    console.log(typeof clickedBtnId);
    console.log(e.currentTarget);

    const bookRemoved = document.querySelector(`[data-id="${clickedBtnId}"]`);
    

    console.log(myTable);
   
     
    
     myTable.removeChild(bookRemoved);
   
     
    library = library.filter(book => book.id === clickedBtnId);
    

     console.log(library);
  });
});
 }


 function toggleStatus() {
    const buttonsToggleStatus = document.querySelectorAll('.btnToggle');
 console.log(buttonsToggleStatus);


buttonsToggleStatus.forEach(button => {
  button.addEventListener('click', (e) => {
     
    const clickedBtn = e.currentTarget;

    const dataset = clickedBtn.dataset; 
    const clickedBtnId = dataset.readId;

   const toggledBook = getBook(clickedBtnId);
    toggledBook.toggleStatus();
      
 if(toggledBook.read == true){
          clickedBtn.textContent = 'Read';
          clickedBtn.classList.remove('red');
          clickedBtn.classList.add('green');
        } else{
          clickedBtn.classList.remove('green');
          clickedBtn.textContent = 'Not Read';
          clickedBtn.classList.add('red');
        };
     
 

     
        
     
  });
});
 }

displayLibrary();
  
toggleStatus();
  removeBook();