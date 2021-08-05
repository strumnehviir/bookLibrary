let library = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function creatorDom(library){
    let libraryBox = document.getElementById('library-box')
    for( bookObject in library){
        console.table(library)
        console.log(book.title)
        console.log(book.author)
        console.log(book.pages)
        let bookbox = document.createElement('div')
        let booktitle = document.createElement('p')
        let bookwriter = document.createElement('p')
        let bookpages = document.createElement('p')
        booktitle.innerText = bookObject.title
        bookwriter.innerText = bookObject.author
        bookpages.innerText = bookObject.pages
        bookbox.appendChild(booktitle)
        bookbox.appendChild(bookwriter)
        bookbox.appendChild(bookpages)
        libraryBox.appendChild(bookbox) 
    }
}

function libraryGenerator(name, author, pages, read){
    newBook = new Book(name, author, pages, read)
    library.push(newBook)
    creatorDom(library)
}

function bookListener(){
    let form = document.querySelector('#form')
    let bookName
    let bookAuthor
    let bookPages
    let bookStatus
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        bookName = document.querySelector('#book').value
        bookAuthor = document.querySelector('#author').value
        bookPages = document.querySelector('#pages').value
        bookStatus = document.querySelector('#status').value
        libraryGenerator(bookName, bookAuthor, bookPages, bookStatus)
        
    })
    
}

bookListener()