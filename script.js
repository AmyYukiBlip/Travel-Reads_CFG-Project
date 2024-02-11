function displayGreeting() {
  let emailEntered = document.getElementById("newsletterform").value;
  if (emailEntered.trim() !== "") {
    alert("Thanks for signing up " + emailEntered + " 🙌");
  } else {
    alert("No email entered, try again 😊");
  }
}
