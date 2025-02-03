function displayGreeting() {
  let emailEntered = document.getElementById("newsletterform").value;
  if (emailEntered.trim() !== "") {
    alert("Thanks for signing up " + emailEntered + " 🙌");
  } else {
    alert("No email entered, try again 😊");
  }
}


// function on reading list page
function bookSuggestion(){
    let bookName = document.getElementById('bookInput').value;
    if (bookName == null || bookName == "") {
        alert('Please enter the title of a book.')
    } else {
        alert("Thanks for suggesting " + bookName + ", we'll add it to the reading list!");
    }
}