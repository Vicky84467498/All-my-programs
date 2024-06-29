document.getElementById("toggleButton").addEventListener("click", function() {
    var courseList = document.getElementById("courseList");
    if (courseList.style.display === "none" || courseList.style.display === "") {
        courseList.style.display = "block";
    } else {
        courseList.style.display = "none";
    }
});

document.getElementById('Bn').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phoneNumber');
    phoneNumber.classList.toggle('visible');
});

const text = "The Future Of Education";
const animText = "Welcome To Connectin Whizttech";
let index1 = 0;
let index2 = 0;

function animateText() {
    document.querySelector('.typed-text-output').textContent = text.substring(0, index1);
    index1 = (index1 + 1.05) % (text.length + 4); // Reset index to 0 when it reaches the end
}

function animateConnectingText() {
    document.querySelector('.typed-text').textContent = animText.substring(0, index2);
    index2 = (index2 + 1.05) % (animText.length + 4); // Reset index to 0 when it reaches the end
}

setInterval(animateText, 900); // Adjust timing as needed
setInterval(animateConnectingText, 100); // Adjust timing as needed

var typed = new Typed(".auto-type",{
    strings : ["New Skills ", "Your way to success","Confidence","a developer within you","a hacker within you"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});     
         

