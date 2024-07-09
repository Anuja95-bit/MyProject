function fetchBooks()
{
    fetch("books.json") //need to add link
    .then(response=>response.json())
    .then(data=>{
        console.log("List of books");
        data.forEach(book => {
            console.log(`Title :${book.title}`);
            console.log(`Title :${book.author}`);
        });
    })
    .catch(error=>{
        console.error("Error occured ",error);
    })
}

fetchBooks();