// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


//add class hidden to modal
const errorModal = document.getElementById('modal')
errorModal.className = "hidden"

//get all like buttons
const likeBtn = document.querySelectorAll('.like-glyph');



//create function that is called by event listener 
function likepost (event){
  const heart = event.target;
  heart.innerHTML = EMPTY_HEART;

  //invoke mimicServerCall
  mimicServerCall()

  //if the servercall is succesfull change heart to full heart
  .then(response => {
    if(heart.innerHTML === EMPTY_HEART){
      heart.innerHTML == FULL_HEART;
      heart.classList.add("activated-heart")
    }
    else {
      heart.innerHTML == EMPTY_HEART;
      heart.classList.remove("activated-heart")
    }
  })

  //error handler
  .catch((error) => {
    errorModal.classList.remove("hidden");
    document.getElementById("modal-message").textContent = error
    //add
    setTimeout(() =>{
      errorModal.classList.add("hidden")
    },3000)
  })




}


//add eventlistener to likeBtn
likeBtn.forEach(heart => {
  heart.addEventListener("click", likepost)
})











//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}