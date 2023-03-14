// create variables
// brought all the rating div from the html file to the javascript file using document.querySelectorAll


const feedBacks = document.querySelectorAll(".rating");
const button = document.getElementById("btn");
const container = document.getElementById("container")
let selectedRating = "";

// add event listener to each rating(feedback) element with forEach
feedBacks.forEach((feedBack) =>{
  feedBack.addEventListener("click", (event) => {
    removActive();
    selectedRating = 
      event.target.innerText || event.target.
      parentNode.innerText;
    event.target.classList.add("active")
    event.target.parentNode.classList.add("active")
  });
});

/* add event listener to the button which targets click 
and add a funtion to make the button work if rating is selected.*/
button.addEventListener("click", ()=>{
  if(selectedRating !== ""){
      container.innerHTML = `
      <strong>Thanks for the feedback!</strong>
      <br><br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>
        We appreciate you for taking your time to tell us how you feel about our service.
        we depend on our customers feedback to make our service better.
      </p>`
  }
})

// function to switch from one rating to the other   
function removActive() {
  feedBacks.forEach((feedBack)=>{
    feedBack.classList.remove("active");
  });
}