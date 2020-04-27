let textInput = document.getElementById('text-input');
textInput.addEventListener('input', function(){
  document.getElementById('meme-text').innerHTML = textInput.value;
});

let input = document.getElementById('meme-insert');
input.addEventListener('change', function(){
  let inputImg = input.files[0];
  let reader = new FileReader();
  let imageMeme = document.getElementById('meme-image');

  if(inputImg){
    reader.readAsDataURL(inputImg);
  }
  reader.onloadend = function() {
    imageMeme.src = reader.result;
  }
});

let button1 = document.querySelector(".button1");
button1.addEventListener('click', function(){
  document.getElementById('meme-image-container').style.borderStyle = "dashed";
  document.getElementById('meme-image-container').style.borderColor = "red";
  document.getElementById('meme-image-container').style.borderWidth = "3px";
});

let button2 = document.querySelector(".button2");
button2.addEventListener('click', function(){
  document.getElementById('meme-image-container').style.borderStyle = "double";
  document.getElementById('meme-image-container').style.borderColor = "blue";
  document.getElementById('meme-image-container').style.borderWidth = "5px";
});

let button3 = document.querySelector(".button3");
button3.addEventListener('click', function(){
  document.getElementById('meme-image-container').style.borderStyle = "groove";
  document.getElementById('meme-image-container').style.borderColor = "green";
  document.getElementById('meme-image-container').style.borderWidth = "6px";
});

let memes = document.getElementsByClassName('meme');
for (meme of memes){
  meme.addEventListener('click',function(element){
    let imgMeme = document.getElementById("meme-image");
    imgMeme.src = element.target.src;
  })};
