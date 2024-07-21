// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



document.addEventListener('DOMContentLoaded', function() {
  const errorModal = document.getElementById('modal');
  const hearts = document.querySelectorAll('.like-glyph')
  errorModal.classList.add('hidden')
  hearts.forEach((heart)=>{
    heart.addEventListener('click',function(){
      mimicServerCall()
    .then(()=>{
      heart.classList.add('activated-heart')
      heart.innerHTML=`♥`
    })
  }).catch((Error)=>{
    const errorMessage=document.getElementById('modal-message')
    errorModal.classList.remove('hidden')
    errorMessage.innerText='Random server error. Try again.'
    setTimeout(() => {
      errorModal.classList.add('hidden')
    },3000);
  
  
    })
    })
    })
    herts.forEach((heart)=>{
      heart.addEventListener('click',function(){
      if(heart.classList.contain('activated-heart')){
        heart.classList.remove('activated-heart')
        heart.innerHTML='♡'

      }
      })
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
