let tablinks=document.querySelector(".tab-links")
let tabcontents=document.querySelector(".tab-contents")
let sidemenu=document.querySelector("#sidemenu")
function opentab(tabname){
    tabcontents.classList.add("hide");
    event.currentTarget.classList.remove("active-link");
    tablinks.classList.remove("active-link");
    tabcontents.classList.remove("active-tab");
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

  const scriptURL = '<https://script.google.com/macros/s/AKfycbyYNdl7xpklGuoyzcszEKcBgl4Ew_9yo1gDuKXQHkJz3xPcUmVPkSLFi6dZUW1O3rqV/exec>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


//   ----------scroll effect--------------
// var crsr = document.querySelector("#cursur")
// var blur = document.querySelector("#cursur-blur")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left=dets.x+"px"
//     crsr.style.top=dets.y+"px"
//     blur.style.left=dets.x- 250+"px"
//     blur.style.top=dets.y- 250 +"px"
// })


