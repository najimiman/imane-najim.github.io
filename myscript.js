//active nav
const links = document.querySelectorAll("nav a");

links.forEach(link => {
link.addEventListener("click", function() {
links.forEach(link => link.classList.remove("active"));
this.classList.add("active");
});
});
//typing text
 window.ityped.init(document.querySelector('.ityped'),{
     strings: ['I love programming!',"I'm full stack developer"],
     loop: true
 })
//my skills 
 const api_url = 
   "https://script.google.com/macros/s/AKfycbwqj4ugBDAa9_hGgwHI-rshF4BGGeULh6Fnp_P8S2ryeZsWRL-FdepHMpvk5wO5dspf/exec";

// Defining async function
async function getapi(url) {
   
   // Storing response
   const response = await fetch(url);
   
   // Storing data in form of JSON
   var data = await response.json();
   console.log(data);
   show(data);
}
getapi(api_url);
//function show table
function show(data) {
   let tab='';
   // Loop to access all rows 
   for (let r of data) {
       tab += ` <div class="bar-one bar-container" >
   <div class="bar" id="bb" data-percentage="${r.nb}%" style="background-color:${r.color};height:${r.nb}%"></div>
   <span class="nametechnologie">${r.nomtech}</span></div>
   `;
   }
   // Setting innerHTML as tab variable
   document.getElementById("aa").innerHTML = tab;
}
$(function(){
$(".filtering").on("click", "span", function () {
 $(this).addClass("active").siblings().removeClass("active");
});
}) 
// filter my project all, web and mobile
const api_url2 = 
   "https://script.google.com/macros/s/AKfycbzy-k1_jnr--Qsio5tfT_V8s1F4T6pBsoQUfYgyD14yrZqJb76n4JFOlRG6WRpvU0gL/exec";

// Defining async function
async function getapi2(url2) {
   
   // Storing response
   const response2 = await fetch(url2);
   
   // Storing data in form of JSON
   var data2 = await response2.json();
   console.log(data2);
   show2(data2);
   $(".filtering").on("click", "span", function () {
     var e = $(this).attr("data-filter");
     console.log(e);
if(e=='*'){
show2(data2);
}
else if(e=='Mobile'){
 let filteredResponse = data2.filter(item => item.nom === e);
 show2(filteredResponse);
}
else{
 let filteredResponse = data2.filter(item => item.nom === e);
 show2(filteredResponse);
}
});
   
}
getapi2(api_url2);
//function show table
function show2(data) {
   let tab='';
   // Loop to access all rows 
   for (let r of data) {
       tab += ` <div class="card" >
         <h4 class="card-title" style="color:#fff">${r.application_nom}</h4>
         <img src="images/${r.image}" alt="" class="imagecard">
         <div class="card-desc"><p>${r.langageuse}</p>
         <a href='${r.lien}'>${r.lien}</a></div>
         </div>
   `;
   }
   document.getElementById("application").innerHTML = tab;
  
 }

 // add form contact in google sheet
 let form = document.querySelector("form");
 form.addEventListener('submit', (e) => {
     e.preventDefault();
     const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
     const submitButton = document.getElementById('btnC');
     if(document.querySelector('[name="nom"]').value != '' && document.querySelector('[name="email"]').value != '' && document.querySelector('[name="message"]').value != ''){
        myModal.show();
         var now = new Date();
      document.getElementById("mydate").value = now.toISOString().slice(0, 16);
     document.querySelector("#btnC").value = "Submiting..";
     let data = new FormData(form);
     fetch('https://script.google.com/macros/s/AKfycbzdsWMkKkCXrcG7A4Rmp1uJ7ijiQrpzD6VakmveztB28XoR5_jsCVD7GfDSy6YLIGz8/exec', {
             method: "POST",
             body: data
         })
         .then(res => res.text())
         .then(data => {
           console.log(data);
            //  document.querySelector("#msg").innerHTML = data;
             document.querySelector("#btnC").value = "Submit";
            
         });
     }
     else{
        myModal.hide();
        
     }
     submitButton.addEventListener('click', toggleModal);
 })


