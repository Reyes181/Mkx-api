/* global $ */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


var url = '/api/character';
var fighter = document.querySelector("#fighter");
var name1 = document.querySelector("#name1");
var img = document.querySelector("#img");
var v1 = document.querySelector("#v1");
var v2 = document.querySelector("#v2");
var v3 = document.querySelector("#v3");
var v1name = document.querySelector("#v1name");
var v2name = document.querySelector("#v2name");
var v3name = document.querySelector("#v3name");



// Axios request
fighter.addEventListener("click", function(){
  axios.get(url)
  .then(function(response){
    name1.innerText = response.data.name;
    img.src = response.data.charImage;
    v3name.innerText = response.data.variations.vThree.name;
    v3.src = response.data.variations.vThree.img;
    v2name.innerText = response.data.variations.vTwo.name;
    v2.src = response.data.variations.vTwo.img;
    v1name.innerText = response.data.variations.vOne.name;
    v1.src = response.data.variations.vOne.img;
  })
  .catch(handleErrors)
});

function handleErrors (err) {
  if(err.response){
    console.log("Problem with repsonse", err.response.status);
  } else if(err.request){
    console.log("Problem with request");
  } else {
    console.log('Error', err.message);
  }
}

