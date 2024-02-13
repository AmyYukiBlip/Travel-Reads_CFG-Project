function bookSuggestion(){
    let bookName = document.getElementById('bookInput').value;
    if (bookName == null || bookName == "") {
        alert('Please enter the title of a book.')
    } else {
        alert("Thanks for suggesting " + bookName + ", we'll add it to the reading list!");
    }
}