// -------------------------------- automated text code ----------------------------------------------------------
var typed = new Typed(".text", {
  strings: ["Programming" , "Web Development"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});


// ---------------------------- scroll to top btn ------------------------------------ 
let toTop = document.querySelector(".top");

window.addEventListener("scroll",() =>{
  if (window.pageYOffset > 100){
      toTop.classList.add("active");
  }
  else{
      toTop.classList.remove("active");
  }
})


// ----------------------------------- contact form and google sheet ---------------------------------------- 
const scriptURL = 'https://script.google.com/macros/s/AKfycbydB6yip46x_JZwLlNtV7nk_SsLdNZZ8e5a6mPVWKT5-MB89fQIU1SQsLLkBNWAoWY2vw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = 'Message sent successfully';
          setTimeout(function(){
            msg.innerHTML = "";
          },3000)
          form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })

    const bar = document.querySelector('.fa-bars');
    const navBar = document.querySelector('.nav-bar');
    const xMark = document.querySelector('.fa-xmark');


  // --------------------------------------- slide menu style --------------------------------------------------------------
    bar.addEventListener('click', () => {

      navBar.style = 'visibility: visible; width: 100%; height: 400px; transition: width 0.3s ease, height 0.3s ease;';

    });

    xMark.addEventListener('click', () => {

      navBar.style = 'visibility: hidden; width: 0px; height: 0px; transition: width 0.3s ease, height 0.3s ease;';

    });


    /* --------------------------- tracking users ------------------------------------ */

    // function trackUsers() {
      window.addEventListener('scroll', () => {
        console.log("1 user is scrolling");
      })
      console.log(document.body)
    // }


