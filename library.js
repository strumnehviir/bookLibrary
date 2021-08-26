let library = []

class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function eventListenerClassCross(){
    let bookBoxCross = document.getElementsByClassName('cross-button')
    for(cross of bookBoxCross){
        cross.addEventListener('click', (e) => {
            let crossInfo = e.target
            let divID = crossInfo.parentNode.id
            let removingDiv = document.getElementById(divID)
            removingDiv.remove()
            let uncleanedDivID = divID
            let libraryEntry = uncleanedDivID.replaceAll("-", " ")
            let offendingEntry = library.filter(entry => entry.title === libraryEntry)

            library = library.filter(x => !offendingEntry.includes(x))
        })
    }
}

function eventListenerStatusChange(){
    let bookBoxStatusButton = document.getElementsByClassName('read-button')
    for(readButton of bookBoxStatusButton){
        readButton.addEventListener('click', (e) =>{
            let readButtonInfo = e.target
            let buttonInfo = readButtonInfo.innerText
            
            if(buttonInfo === "read"){
                readButtonInfo.innerText = "not read"
                let divID = readButtonInfo.parentNode.id
                let libraryEntry = divID.replaceAll("-", " ")
                let offendingEntryArray = library.filter(entry => entry.title === libraryEntry)
                let offendingEntry = offendingEntryArray[0]
                offendingEntry.read = "not read"
                let libraryFoundObjectIndex = library.findIndex((book) => book.title === offendingEntry.title)
                library.splice(libraryFoundObjectIndex, 1, offendingEntry)
            }
            else if( buttonInfo === "not read"){
                readButtonInfo.innerText = "read"
                let divID = readButtonInfo.parentNode.id
                let libraryEntry = divID.replaceAll("-", " ")
                let offendingEntryArray = library.filter(entry => entry.title === libraryEntry)
                let offendingEntry = offendingEntryArray[0]
                offendingEntry.read = "read"
                let libraryFoundObjectIndex = library.findIndex((book) => book.title === offendingEntry.title)
                library.splice(libraryFoundObjectIndex, 1, offendingEntry)
            }
            
        })
    }
}

function creatorDom(inputArr){
    let libraryBox = document.getElementById('library-box')
    removeAllChildNodes(libraryBox)
    inputArr.forEach(bookObject =>{
        
        let bookbox = document.createElement('div')
        bookbox.setAttribute("class", "book-box")
        let titleIdNAmeArr = bookObject.title.split(" ")
        let titleIdName = titleIdNAmeArr.join("-")
        bookbox.setAttribute("id", titleIdName)

        let booktitle = document.createElement('p')
        let bookwriter = document.createElement('p')
        let bookpages = document.createElement('p')
        let readButton = document.createElement("button")
        let crossButton = document.createElement('button')

        booktitle.innerText = bookObject.title
        bookwriter.innerText = bookObject.author
        bookpages.innerText = bookObject.pages
        readButton.innerText = bookObject.read
        crossButton.innerText = "X"

        readButton.setAttribute('class', 'read-button')
        readButton.setAttribute('id', `${titleIdName}-button`)
        crossButton.setAttribute('class', 'cross-button')
        crossButton.setAttribute('id',`${titleIdName}-cross`)

        bookbox.appendChild(booktitle)
        bookbox.appendChild(bookwriter)
        bookbox.appendChild(bookpages)
        bookbox.appendChild(readButton)
        bookbox.appendChild(crossButton)
        libraryBox.appendChild(bookbox) 
        eventListenerClassCross()
        eventListenerStatusChange()

    })
 
}

function libraryGenerator(name, author, pages, read){
    newBook = new Book(name, author, pages, read)
    library.push(newBook)
    creatorDom(library)
   
}

function bookListener(){
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let bookName = document.querySelector('#book').value
        let bookAuthor = document.querySelector('#author').value
        let bookPages = document.querySelector('#pages').value
        let statusRaw = document.querySelector('#status').value
        let statusArr = statusRaw.split('-')
        let bookStatus = statusArr.join(" ")

        libraryGenerator(bookName, bookAuthor, bookPages, bookStatus)
        
    })
    
}

bookListener()