//  Typing animation

var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Python Developer", "Athlete"],
    typeSpeed: 90,
    BackSpeed: 60,
    loop: true

})


// Navbar in phone and tablet
const navToggler = document.querySelector(".nav-toggler");
const navTogglerCross = document.querySelector(".nav-toggler-cross");
let mainContent = document.querySelector(".main-content");

navToggler.addEventListener("click", () => {
    document.getElementById("myDIV").style.opacity = "1";
    document.getElementById("navTogCross").style.opacity = "1";
    document.getElementById("navTog").style.opacity = "0";
    mainContent.classList.add("blur-filter");

    // document.body.style.background = "blure"; 
})
navTogglerCross.addEventListener("click", () => {
    document.getElementById("myDIV").style.opacity = "0";
    document.getElementById("navTogCross").style.opacity = "0";
    document.getElementById("navTog").style.opacity = "1";
    mainContent.classList.remove("blur-filter");

})

// changing the color active nav item


// Assuming navElements is your HTMLCollection
let navElements = document.getElementsByClassName('navEle');

// Function to handle the click event
function handleNavClick(clickedElement) {
  // Remove 'active' class from all navElements
  for (let navElement of navElements) {
    navElement.classList.remove('active');
  }

  // Add 'active' class to the clicked element
  clickedElement.classList.add('active');
}

// Add click event listener to each navElement
for (let navElement of navElements) {
  navElement.addEventListener('click', function() {
    handleNavClick(this); // 'this' refers to the clicked navElement
  });
}

//  SEnd emial
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "rahulkumar34251@gmail.com",
        Password: "0504012004",
        To: 'kumar.rahul@iitgn.ac.in',
        From: document.getElementById("email").value,
        Subject: "New Client" + document.getElementById('subject').value,
        Body: "I'm" + document.getElementById("firstname").value + " " 
        + document.getElementById("lastname").value + "."
        + "<br>" + document.getAnimations("massege").value
        + "<br>"
        + "Email:" + document.getElementById("email").value
        + "<br> Phone no:" + document.getElementById("phonenumber").value
    }).then(
        message => alert("Submit Succesfully")
    );
}